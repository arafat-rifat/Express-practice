const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

// console.log(dotenv('env'));

const app = require('./app.js');

const DataBase = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DataBase, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DataBase Connection Successfully!!!'));

//   START SERVER
const port = process.env.PORT || 2000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
