import accounts from '../models/Account.js';

class AccountController {
    
    static findAccounts = (_req, res) => {
        accounts.find((_err, accounts) => {
            res.status(200).json(accounts);
        })
    }

    static findAccountById = (req, res) => {
        const { id } = req.params;
        accounts.findById(id, (err, account) => {
            if(err) {
                res.status(500).send({message: err.message});
              } else {
                res.status(200).json(account);
              }
        })
    }

    static createAccount = (req, res) => {
        const account = new accounts({...req.body, createdDate: Date()});
        account.save((err, account) => {
            if(err) {
                res.status(500).send({message: err.message});
              } else {
                res.status(201).set('Location', `/admin/accounts/${account.id}`).json(account);
              }
        })
    }

    static updateAccount = (req, res) => {
        const { id } = req.params;
    
        accounts.findByIdAndUpdate(id, {$set: req.body}, { new: true}, (err, account) => {
          if(!err) {
            res.status(200).send({message: 'Account successfully updated'});
          } else {
            res.status(500).set('Location', `/admin/accounts/${account.id}`).send({message: err.message});
          }
        })
      }

      static deleteAccount = (req, res) => {
        const { id } = req.params;
    
        accounts.findByIdAndDelete(id, (err) => {
          if(!err){
            res.status(204).send({message: 'Account successfully deleted'});
          } else {
            res.status(500).send({message: err.message});
          }
        })
      }
}

export default AccountController;