// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
   foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
    through: {
      model: ProductTag,
    },
});

//connects to above a Product indirectly connects to a tag 
Tag.belongsToMany(Product, {  
    through: {
      model: ProductTag,
    },
});

// I get an error on this
// Tag.belongsTo(ProductTag, {
//   foreignKey: 'tag_id',
// });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
