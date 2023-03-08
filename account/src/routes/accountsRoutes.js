import express from 'express';
import passport from 'passport';
import AccountController from '../controllers/accountsController.js';
import validateAccount from '../validators/accountsValidation.js';

const router = express.Router();
const authenticateLocal = passport.authenticate('local', { session: false });
const authenticateBearer = passport.authenticate('bearer', { session: false });

router
  .get('/admin/accounts', authenticateBearer, AccountController.findAccounts)
  .get('/accounts/:id', AccountController.findAccountById)
  .post('/accounts/login', authenticateLocal, AccountController.login)
  .post('/admin/accounts', validateAccount, AccountController.createAccount)
  .put('/admin/accounts/:id', authenticateBearer, validateAccount, AccountController.updateAccount)
  .delete('/admin/accounts/:id', authenticateBearer, AccountController.deleteAccount);

export default router;
