// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'product_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongToMany(Tag, {
  foreignKey: 'ProductTag',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongToMany(Product, {
  foreignKey: 'ProductTag',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
