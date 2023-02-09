import categories from '../models/Category.js';

class CategoryController {

    static findCategories = (_req, res) => {
        categories.find((_err, categories) => {
            res.status(200).json(categories);
        })
    }

    static findCategoryById = (req, res) => {
        const { id } = req.params;
        categories.findById(id, (err, category) => {
            if(err) {
                res.status(500).send({message: err.message});
              } else {
                res.status(201).json(category);
              }
        })
    }

    static createCategory = (req, res) => {
        const category = new categories(req.body);
        category.save((err, category) => {
            if(err) {
                res.status(500).send({message: err.message});
              } else {
                res.status(201).set('Location', `/admin/categories/${category.id}`).json(category)
              }
        })
    }

    static updateCategory = (req, res) => {
        const { id } = req.params;
    
        categories.findByIdAndUpdate(id, {$set: req.body}, { new: true}, (err, category) => {
          if(!err) {
            res.status(200).set('Location', `/admin/categories/${category.id}`).send({message: 'Category successfully updated'});
          } else {
            res.status(500).send({message: err.message});
          }
        })
      }
    
      static updateStatusCategory = (req, res) => {
        const { id } = req.params;
    
        categories.findByIdAndUpdate(id, {$set: req.body}, { new: true}, (err, category) => {
          if(!err) {
            res.status(200).set('Location', `/admin/categories/${category.id}`).send({message: 'Category successfully updated'});
          } else {
            res.status(500).send({message: err.message});
          }
        })
      }

      static deleteCategory = (req, res) => {
        const { id } = req.params;
    
        categories.findByIdAndDelete(id, (err) => {
          if(!err){
            res.status(204).send({message: 'Category successfully deleted'});
          } else {
            res.status(500).send({message: err.message});
          }
        })
      }
}

export default CategoryController;