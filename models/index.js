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
    as: 'product_tag_name'
});

// connects to above a Product indirectly connects to a tag
Tag.belongsToMany(Product, {
    through: {
      model: ProductTag,
    },
    as: 'tag_name_of_Product',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsTo(ProductTag, {
  foreignKey: 'tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
