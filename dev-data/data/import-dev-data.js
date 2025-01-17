const fs = require('fs')
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Tour = require('../../model/tourModel');
const { dirname } = require('path');

dotenv.config({ path: "./config.env" });


const DB = process.env.DATABASE.replace(
  "{DATABASE_PASSWORD}",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log("failed to connect with data base", err);
  });




const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8'));

const importData = async () => {
    try {
        await Tour.create(tours);
        console.log('data successfully imported')
    } catch (error) {
        console.log(error)
    }
  process.exit();
}

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log("data successfully deleated");
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete'){
  deleteData();
}


console.log(process.argv);
