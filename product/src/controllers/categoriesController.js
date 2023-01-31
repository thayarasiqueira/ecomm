import categories from '../models/Category.js';

class CategoryController {

    static findCategories = (_req, res) => {
        categories.find((_err, categories) => {
            res.status(200).json(categories)
        })
    }
}

export default CategoryController;