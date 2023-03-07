import Category from '../models/Category.js';

class CategoryController {
  static findCategories = (_req, res) => {
    Category.find((err, allCategories) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      return res.status(200).json(allCategories);
    });
  };

  static findCategoryById = (req, res) => {
    const { id } = req.params;
    Category.findById(id, (err, category) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      return res.status(200).json(category);
    });
  };

  static createCategory = (req, res) => {
    const category = new Category(req.body);
    category.save((err, newCategory) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      return res.status(201).set('Location', `/admin/Categories/${category.id}`).json(newCategory);
    });
  };

  static updateCategory = (req, res) => {
    const { id } = req.params;

    Category.findByIdAndUpdate(id, { $set: req.body }, { new: true }, (err, category) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      return res.status(200).set('Location', `/admin/Categories/${category.id}`).send({ message: 'Category successfully updated' });
    });
  };

  static updateStatusCategory = (req, res) => {
    const { id } = req.params;

    Category.findByIdAndUpdate(id, { $set: req.body }, { new: true }, (err, category) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      return res.status(200).set('Location', `/admin/Categories/${category.id}`).send({ message: 'Category successfully updated' });
    });
  };

  static deleteCategory = (req, res) => {
    const { id } = req.params;

    Category.findByIdAndDelete(id, (err) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      return res.status(204).send({ message: 'Category successfully deleted' });
    });
  };
}

export default CategoryController;
