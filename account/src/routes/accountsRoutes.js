import express from 'express';
import passport from 'passport';
import AccountController from '../controllers/accountsController.js';
import validateAccount from '../validators/accountsValidation.js';

const router = express.Router();
const authenticateLocal = passport.authenticate('local', { session: false });

router
  .get('/admin/accounts', AccountController.findAccounts)
  .get('/accounts/logout', AccountController.logout)
  .post('/accounts/login', authenticateLocal, AccountController.login)
  .post('/admin/accounts', validateAccount, AccountController.createAccount)
  .put('/admin/accounts/:id', validateAccount, AccountController.updateAccount)
  .delete('/admin/accounts/:id', AccountController.deleteAccount)
  .get('/accounts/:id', AccountController.findAccountById);

export default router;
