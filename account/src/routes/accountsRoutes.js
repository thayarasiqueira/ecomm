import express from 'express';
import AccountController from '../controllers/accountsController.js';
import validateAccount from '../validations/accountsValidations.js';

const router = express.Router();

router
    .get('/accounts', AccountController.findAccounts)
    .get('/accounts/:id', AccountController.findAccountById)
    .post('/accounts', validateAccount, AccountController.createAccount)
    .put('/accounts/:id', validateAccount, AccountController.updateAccount)
    .delete('/accounts/:id', AccountController.deleteAccount)

export default router;
