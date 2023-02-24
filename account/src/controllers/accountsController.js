import Accounts from '../models/Account.js';

class AccountController {
  static findAccounts = (_req, res) => {
    Accounts.find((err, allAccounts) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      return res.status(200).json(allAccounts);
    });
  };

  static findAccountById = (req, res) => {
    const { id } = req.params;
    Accounts.findById(id, (err, account) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(200).json(account);
      }
    });
  };

  static createAccount = (req, res) => {
    const account = new Accounts({ ...req.body, createdDate: Date() });
    account.save((err, newAccount) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(201).set('Location', `/admin/Accounts/${account.id}`).json(newAccount);
      }
    });
  };

  static updateAccount = (req, res) => {
    const { id } = req.params;

    Accounts.findByIdAndUpdate(id, { $set: req.body }, { new: true }, (err, account) => {
      if (!err) {
        res.status(200).send({ message: 'Account successfully updated' });
      } else {
        res.status(500).set('Location', `/admin/Accounts/${account.id}`).send({ message: err.message });
      }
    });
  };

  static deleteAccount = (req, res) => {
    const { id } = req.params;

    Accounts.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(204).send({ message: 'Account successfully deleted' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default AccountController;
