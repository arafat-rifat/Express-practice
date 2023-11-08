const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('./../../Models/tourModels');
dotenv.config({ path: './config.env' });

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

//   READ JSON FILE
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple-json`, 'utf-8')
);

// Import from Dev data file to  DataBase
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data Successfully Loaded');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

// Delete All data From DataBase collection
const deletedData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Data Successfully Deleted');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === '--import') {
  importData();
  console.log('Data Lode Successfully');
} else if (process.argv[2] === '--delete') {
  deletedData();
  console.log('Data Delete Successfully');
}
console.log(process.argv);
