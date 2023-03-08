import Account from '../models/Account.js';
import { encrypt } from '../utils/hash.js';
import generateToken from '../utils/generateToken.js';
import { addToBlacklist } from '../../redis/blacklistOperations.js';

class AccountController {
  static findAccounts = (_req, res) => {
    Account.find((err, allAccounts) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      return res.status(200).json(allAccounts);
    });
  };

  static findAccountById = (req, res) => {
    const { id } = req.params;
    Account.findById(id, (err, account) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      return res.status(200).json(account);
    });
  };

  static login = (req, res) => {
    const { id } = req.user;
    const token = generateToken(id);
    res.status(204).set('Authorization', token).send();
  };

  static logout = async (req, res) => {
    try {
      const { token } = req;
      console.log(token);
      await addToBlacklist(token);
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  static createAccount = (req, res) => {
    const { senha } = req.body;
    req.body.senha = encrypt(senha);
    const account = new Account({ ...req.body, createdDate: Date() });
    account.save((err, newAccount) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      return res.status(201).set('Location', `/admin/Accounts/${newAccount.id}`).json(newAccount);
    });
  };

  static updateAccount = (req, res) => {
    const { id } = req.params;

    Account.findByIdAndUpdate(id, { $set: req.body }, { new: true }, (err, account) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      return res.status(200).set('Location', `/admin/Accounts/${account.id}`).send({ message: 'Account successfully updated' });
    });
  };

  static deleteAccount = (req, res) => {
    const { id } = req.params;

    Account.findByIdAndDelete(id, (err) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      return res.status(204).send({ message: 'Account successfully deleted' });
    });
  };
}

export default AccountController;
