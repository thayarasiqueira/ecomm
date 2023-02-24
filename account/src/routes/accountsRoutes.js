import express from 'express';
import AccountController from '../controllers/accountsController.js';
import validateAccount from '../validations/accountsValidation.js';

const router = express.Router();

router
  .get('/admin/accounts', AccountController.findAccounts)
  .get('/accounts/:id', AccountController.findAccountById)
  .post('/admin/accounts', validateAccount, AccountController.createAccount)
  .put('/admin/accounts/:id', validateAccount, AccountController.updateAccount)
  .delete('/admin/accounts/:id', AccountController.deleteAccount);

export default router;
