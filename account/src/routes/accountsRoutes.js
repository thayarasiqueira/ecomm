import express from 'express';
import AccountController from '../controllers/accountsController.js';
import validateAccount from '../validations/accountsValidations.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../../swagger/account.json' assert { type: "json" };;

const router = express.Router();

router
    .get('/accounts', AccountController.findAccounts)
    .get('/accounts/:id', AccountController.findAccountById)
    .post('/accounts', validateAccount, AccountController.createAccount)
    .put('/accounts/:id', validateAccount, AccountController.updateAccount)
    .delete('/accounts/:id', AccountController.deleteAccount)

    .use('/api-docs', swaggerUi.serve)
    .get('/api-docs', swaggerUi.setup(swaggerDocument));

export default router;
