import express from 'express';
import AccountController from '../controllers/accountsController.js';
import validateAccount from '../validations/accountsValidation.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../../swagger/swagger_output.json' assert { type: "json" };

const router = express.Router();

router
    .get('/admin/accounts', AccountController.findAccounts)
    .get('/admin/accounts/:id', AccountController.findAccountById)
    .post('/admin/accounts', validateAccount, AccountController.createAccount)
    .put('/admin/accounts/:id', validateAccount, AccountController.updateAccount)
    .delete('/admin/accounts/:id', AccountController.deleteAccount)

    .use('/api-docs', swaggerUi.serve)
    .get('/api-docs', swaggerUi.setup(swaggerDocument))

export default router;
