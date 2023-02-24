import Categories from '../models/Category.js';

class CategoryController {
  static findCategories = (_req, res) => {
    Categories.find((err, allCategories) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      return res.status(200).json(allCategories);
    });
  };

  static findCategoryById = (req, res) => {
    const { id } = req.params;
    Categories.findById(id, (err, category) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(200).json(category);
      }
    });
  };

  static createCategory = (req, res) => {
    const category = new Categories(req.body);
    category.save((err, newCategory) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(201).set('Location', `/admin/Categories/${category.id}`).json(newCategory);
      }
    });
  };

  static updateCategory = (req, res) => {
    const { id } = req.params;

    Categories.findByIdAndUpdate(id, { $set: req.body }, { new: true }, (err, category) => {
      if (!err) {
        res.status(200).set('Location', `/admin/Categories/${category.id}`).send({ message: 'Category successfully updated' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static updateStatusCategory = (req, res) => {
    const { id } = req.params;

    Categories.findByIdAndUpdate(id, { $set: req.body }, { new: true }, (err, category) => {
      if (!err) {
        res.status(200).set('Location', `/admin/Categories/${category.id}`).send({ message: 'Category successfully updated' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteCategory = (req, res) => {
    const { id } = req.params;

    Categories.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(204).send({ message: 'Category successfully deleted' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default CategoryController;
