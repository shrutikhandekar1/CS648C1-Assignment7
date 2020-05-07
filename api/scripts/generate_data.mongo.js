/* global db print */
/* eslint no-restricted-globals: "off" */

const productNames = ['abc', 'bcd', 'cde','def','xyz'];
const categories = ['SHIRTS', 'JEANS','JACKETS', 'SWEATERS','ACCESSORIES'];
const images = [
    'https://www.istockphoto.com/photo/formal-shirt-with-button-down-collar-isolated-on-white-gm856917576-141225609',
    'https://www.istockphoto.com/photo/blue-jeans-isolated-with-clipping-path-gm600373506-103229995',
    'https://www.istockphoto.com/photo/black-hoodie-mock-up-gm695933044-128721993',
    'https://www.istockphoto.com/photo/formal-shirt-with-button-down-collar-isolated-on-white-gm856917576-141225609',
    'https://www.shutterstock.com/image-vector/hair-accessories-woman-items-stylist-salon-1451306021'
];


const initialCount = db.products.count();

for (let i = 0; i < 100; i += 1) {
  const productName = productNames[Math.floor(Math.random() * 5)];
  const category = categories[Math.floor(Math.random() * 4)];
  const price = Math.ceil(Math.random() * 20);
  const image = images[Math.floor(Math.random() * 4)];
  const id = initialCount + i + 1;

  const product = {
    id, price, productName, category, image,
  };

  db.issues.insertOne(product);
}

const count = db.products.count();
db.counters.update({ _id: 'products' }, { $set: { current: count } });

print('New product count:', count);