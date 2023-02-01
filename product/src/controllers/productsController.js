import products from '../models/Product.js';

class ProductController {

    static findProducts = (_req, res) => {
        products.find((_err, products) => {
            res.status(200).json(products)
        })
    }

    static findProductById = (req, res) => {
        const { id } = req.params;
        products.findById(id, (err, Product) => {
            if(err) {
                res.status(500).send({message: err.message})
              } else {
                res.status(201).json(Product)
              }
        })
    }

    static createProduct = (req, res) => {
        const Product = new products(req.body);
        Product.save((err) => {
            if(err) {
                res.status(500).send({message: err.message})
              } else {
                res.status(201).json(Product)
              }
        })
    }

    static updateProduct = (req, res) => {
        const { id } = req.params;
    
        products.findByIdAndUpdate(id, {$set: req.body}, (err) => {
          if(!err) {
            res.status(200).send({message: 'Product successfully updated'})
          } else {
            res.status(500).send({message: err.message})
          }
        })
      }

      static deleteProduct = (req, res) => {
        const { id } = req.params;
    
        products.findByIdAndDelete(id, (err) => {
          if(!err){
            res.status(204).send({message: 'Product successfully deleted'})
          } else {
            res.status(500).send({message: err.message})
          }
        })
      }
}

export default ProductController;