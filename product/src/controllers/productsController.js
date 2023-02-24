import Products from '../models/Product.js';

class ProductController {
  static findProducts = (_req, res) => {
    Products.find((err, allProducts) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      return res.status(200).json(allProducts);
    });
  };

  static findProductById = (req, res) => {
    const { id } = req.params;
    Products.findById(id, (err, product) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(200).json(product);
      }
    });
  };

  static createProduct = (req, res) => {
    const Product = new Products(req.body);
    Product.save((err, product) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(201).set('Location', `/admin/Products/${product.id}`).json(product);
      }
    });
  };

  static updateProduct = (req, res) => {
    const { id } = req.params;

    Products.findByIdAndUpdate(id, { $set: req.body }, { new: true }, (err, product) => {
      if (!err) {
        res.status(200).set('Location', `/admin/Products/${product.id}`).send({ message: 'Product successfully updated' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteProduct = (req, res) => {
    const { id } = req.params;

    Products.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(204).send({ message: 'Product successfully deleted' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default ProductController;
