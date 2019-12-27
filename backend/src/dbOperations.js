const mongoose = require('mongoose');

let collection;

mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () =>
    collection = await mongoose.model(
      'WeatherForecast',
      new mongoose.Schema(
        { cityName: { type: String, required: true, unique: true } },
        { collection: 'Cities' }
      )
    ));
mongoose.set('useCreateIndex', true);

const saveOne = async (cityName) => collection({ cityName }).save();

const deleteOne = async (id) => collection.deleteOne({ _id: id });

const findAll = async () => collection.find();

const findOne = async (cityName) => collection.findOne({cityName});

module.exports = {
  saveOne,
  deleteOne,
  findAll,
  findOne
};