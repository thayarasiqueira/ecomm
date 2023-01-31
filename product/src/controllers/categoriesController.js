import categories from '../models/Category.js';
import validateCategory from '../validations/categoriesValidation.js';

class CategoryController {

    static findCategories = (_req, res) => {
        categories.find((_err, categories) => {
            res.status(200).json(categories)
        })
    }

    static findCategoryById = (req, res) => {
        const { id } = req.params;
        categories.findById(id, (err, category) => {
            if(err) {
                res.status(500).send({message: err.message})
              } else {
                res.status(201).json(category)
              }
        })
    }

    static createCategory = (req, res) => {
        const { error } = validateCategory(req.body);
        if (error) throw error;
        const category = new categories(req.body);

        category.save((err) => {
            if(err) {
                res.status(500).send({message: err.message})
              } else {
                res.status(201).json(category)
              }
        })
    }
}

export default CategoryController;