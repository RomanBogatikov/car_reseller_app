const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 3001;
const app = express();
const Car = require('./models/Car');

// require donenv
require('dotenv').config();

// Database connection
const MONGODB_URI = process.env.MONGODB_URI ||'mongodb://localhost:27017/cars';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('connected to mongoose...')
});

// Error / Disconnection
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'));
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));

const host = process.env.HOST || 'http://localhost:3000';
const corsOptions = {
  // origin: 'http://localhost:3000',
  origin: host,
  credentials: true,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
// to serve static files (images) to the Client
app.use(express.static('assets'));

// Controllers
const carsController = require('./controllers/cars');
app.use('/cars', carsController);

// index route for testing purposes
app.get('/', (req, res) => {
  console.log(req.headers);
  res.send('hello cars');
});

//  seed route (to seed cars into the database)

app.get('/seed', (req, res) => {
  Car.create([
    {
      model: 'Skoda Fabia',
      year: 2011,
      producer: 'Volkswagen',
      price: 6000,
      owner: 'Peter Wrobel',
      'tel/mobile': '+5810456455456',
      mileage: 67000,
      registered: 'Poland',
      image: './assets/images/Fabia1.JPG',
    },
    {
      model: 'Hyundai Getz',
      year: 2008,
      producer: 'Hyundai',
      price: 8900,
      owner: 'Mike Smith',
      'tel/mobile': '+5810456445456',
      mileage: 12000,
      registered: 'USA',
      image: './assets/images/hyundai_getz2.jpg',
    },
    {
      model: 'Hyundai i108',
      year: 2014,
      producer: 'Hyundai',
      price: 15000,
      owner: 'Camil Bertrand',
      'tel/mobile': '+5810456445456',
      mileage: 3000,
      registered: 'Canada',
      image: './assets/images/hyundaii108.jpg',
    },
    {
      model: 'Aveo',
      year: 2000,
      producer: 'Chevrolette',
      price: 3500,
      owner: 'Jose Hernandez',
      'tel/mobile': '+5815556445477',
      mileage: 13000,
      registered: 'Mexico',
      image: './assets/images/aveo.jpg',
    },
    {
      model: 'Liberty',
      year: 2016,
      producer: 'Jeep',
      price: 21300,
      owner: 'Tom Price',
      'tel/mobile': '+13805489900',
      mileage: 6500,
      registered: 'New Hampshire',
      image: './assets/images/jeep.jpg',
    },
    {
      model: 'Uno',
      year: 2000,
      producer: 'Fiat',
      price: 58900,
      owner: 'Tony Santucci',
      'tel/mobile': '+248650098227',
      mileage: 92000,
      registered: 'Italy',
      image: './assets/images/fiat_uno.jpg',
    },
    {
      model: 'IS200',
      year: 2011,
      producer: 'Lexus',
      price: 12890,
      owner: 'Maria Lombardi',
      'tel/mobile': '+14029874736682',
      mileage: 75000,
      registered: 'Nebraska',
      image: './assets/images/lexus.jpg',
    },
    {
      model: 'Skoda Fabia',
      year: 2011,
      producer: 'Volkswagen',
      price: 6000,
      owner: 'Peter Wrobel',
      'tel/mobile': '+5810456455456',
      mileage: 67000,
      registered: 'Poland',
      image: './assets/images/Fabia1.JPG',
    },
    {
      model: 'Hyundai Getz',
      year: 2008,
      producer: 'Hyundai',
      price: 8900,
      owner: 'Mike Smith',
      'tel/mobile': '+5810456445456',
      mileage: 12000,
      registered: 'USA',
      image: './assets/images/hyundai_getz2.jpg',
    },
    {
      model: 'Hyundai i108',
      year: 2014,
      producer: 'Hyundai',
      price: 15000,
      owner: 'Camil Bertrand',
      'tel/mobile': '+5810456445456',
      mileage: 3000,
      registered: 'Canada',
      image: './assets/images/hyundaii108.jpg',
    },
    {
      model: 'Aveo',
      year: 2000,
      producer: 'Chevrolette',
      price: 3500,
      owner: 'Jose Hernandez',
      'tel/mobile': '+5815556445477',
      mileage: 13000,
      registered: 'Mexico',
      image: './assets/images/aveo.jpg',
    },
    {
      model: 'Liberty',
      year: 2016,
      producer: 'Jeep',
      price: 21300,
      owner: 'Tom Price',
      'tel/mobile': '+13805489900',
      mileage: 6500,
      registered: 'New Hampshire',
      image: './assets/images/jeep.jpg',
    },
    {
      model: 'Uno',
      year: 2000,
      producer: 'Fiat',
      price: 58900,
      owner: 'Tony Santucci',
      'tel/mobile': '+248650098227',
      mileage: 92000,
      registered: 'Italy',
      image: './assets/images/fiat_uno.jpg',
    },
    {
      model: 'IS200',
      year: 2011,
      producer: 'Lexus',
      price: 12890,
      owner: 'Maria Lombardi',
      'tel/mobile': '+14029874736682',
      mileage: 75000,
      registered: 'Nebraska',
      image: './assets/images/lexus.jpg',
    },
    {
      model: 'Skoda Fabia',
      year: 2011,
      producer: 'Volkswagen',
      price: 6000,
      owner: 'Peter Wrobel',
      'tel/mobile': '+5810456455456',
      mileage: 67000,
      registered: 'Poland',
      image: './assets/images/Fabia1.JPG',
    },
    {
      model: 'Hyundai Getz',
      year: 2008,
      producer: 'Hyundai',
      price: 8900,
      owner: 'Mike Smith',
      'tel/mobile': '+5810456445456',
      mileage: 12000,
      registered: 'USA',
      image: './assets/images/hyundai_getz2.jpg',
    },
    {
      model: 'Hyundai i108',
      year: 2014,
      producer: 'Hyundai',
      price: 15000,
      owner: 'Camil Bertrand',
      'tel/mobile': '+5810456445456',
      mileage: 3000,
      registered: 'Canada',
      image: './assets/images/hyundaii108.jpg',
    },
    {
      model: 'Aveo',
      year: 2000,
      producer: 'Chevrolette',
      price: 3500,
      owner: 'Jose Hernandez',
      'tel/mobile': '+5815556445477',
      mileage: 13000,
      registered: 'Mexico',
      image: './assets/images/aveo.jpg',
    },
    {
      model: 'Liberty',
      year: 2016,
      producer: 'Jeep',
      price: 21300,
      owner: 'Tom Price',
      'tel/mobile': '+13805489900',
      mileage: 6500,
      registered: 'New Hampshire',
      image: './assets/images/jeep.jpg',
    },
    {
      model: 'Uno',
      year: 2000,
      producer: 'Fiat',
      price: 58900,
      owner: 'Tony Santucci',
      'tel/mobile': '+248650098227',
      mileage: 92000,
      registered: 'Italy',
      image: './assets/images/fiat_uno.jpg',
    },
    {
      model: 'IS200',
      year: 2011,
      producer: 'Lexus',
      price: 12890,
      owner: 'Maria Lombardi',
      'tel/mobile': '+14029874736682',
      mileage: 75000,
      registered: 'Nebraska',
      image: './assets/images/lexus.jpg',
    },
    {
      model: 'Skoda Fabia',
      year: 2011,
      producer: 'Volkswagen',
      price: 6000,
      owner: 'Peter Wrobel',
      'tel/mobile': '+5810456455456',
      mileage: 67000,
      registered: 'Poland',
      image: './assets/images/Fabia1.JPG',
    },
    {
      model: 'Hyundai Getz',
      year: 2008,
      producer: 'Hyundai',
      price: 8900,
      owner: 'Mike Smith',
      'tel/mobile': '+5810456445456',
      mileage: 12000,
      registered: 'USA',
      image: './assets/images/hyundai_getz2.jpg',
    },
    {
      model: 'Hyundai i108',
      year: 2014,
      producer: 'Hyundai',
      price: 15000,
      owner: 'Camil Bertrand',
      'tel/mobile': '+5810456445456',
      mileage: 3000,
      registered: 'Canada',
      image: './assets/images/hyundaii108.jpg',
    },
    {
      model: 'Aveo',
      year: 2000,
      producer: 'Chevrolette',
      price: 3500,
      owner: 'Jose Hernandez',
      'tel/mobile': '+5815556445477',
      mileage: 13000,
      registered: 'Mexico',
      image: './assets/images/aveo.jpg',
    },
    {
      model: 'Liberty',
      year: 2016,
      producer: 'Jeep',
      price: 21300,
      owner: 'Tom Price',
      'tel/mobile': '+13805489900',
      mileage: 6500,
      registered: 'New Hampshire',
      image: './assets/images/jeep.jpg',
    },
    {
      model: 'Uno',
      year: 2000,
      producer: 'Fiat',
      price: 58900,
      owner: 'Tony Santucci',
      'tel/mobile': '+248650098227',
      mileage: 92000,
      registered: 'Italy',
      image: './assets/images/fiat_uno.jpg',
    },
    {
      model: 'IS200',
      year: 2011,
      producer: 'Lexus',
      price: 12890,
      owner: 'Maria Lombardi',
      'tel/mobile': '+14029874736682',
      mileage: 75000,
      registered: 'Nebraska',
      image: './assets/images/lexus.jpg',
    },
    {
      model: 'Skoda Fabia',
      year: 2011,
      producer: 'Volkswagen',
      price: 6000,
      owner: 'Peter Wrobel',
      'tel/mobile': '+5810456455456',
      mileage: 67000,
      registered: 'Poland',
      image: './assets/images/Fabia1.JPG',
    },
    {
      model: 'Hyundai Getz',
      year: 2008,
      producer: 'Hyundai',
      price: 8900,
      owner: 'Mike Smith',
      'tel/mobile': '+5810456445456',
      mileage: 12000,
      registered: 'USA',
      image: './assets/images/hyundai_getz2.jpg',
    },
    {
      model: 'Hyundai i108',
      year: 2014,
      producer: 'Hyundai',
      price: 15000,
      owner: 'Camil Bertrand',
      'tel/mobile': '+5810456445456',
      mileage: 3000,
      registered: 'Canada',
      image: './assets/images/hyundaii108.jpg',
    },
    {
      model: 'Aveo',
      year: 2000,
      producer: 'Chevrolette',
      price: 3500,
      owner: 'Jose Hernandez',
      'tel/mobile': '+5815556445477',
      mileage: 13000,
      registered: 'Mexico',
      image: './assets/images/aveo.jpg',
    },
    {
      model: 'Liberty',
      year: 2016,
      producer: 'Jeep',
      price: 21300,
      owner: 'Tom Price',
      'tel/mobile': '+13805489900',
      mileage: 6500,
      registered: 'New Hampshire',
      image: './assets/images/jeep.jpg',
    },
    {
      model: 'Uno',
      year: 2000,
      producer: 'Fiat',
      price: 58900,
      owner: 'Tony Santucci',
      'tel/mobile': '+248650098227',
      mileage: 92000,
      registered: 'Italy',
      image: './assets/images/fiat_uno.jpg',
    },
    {
      model: 'IS200',
      year: 2011,
      producer: 'Lexus',
      price: 12890,
      owner: 'Maria Lombardi',
      'tel/mobile': '+14029874736682',
      mileage: 75000,
      registered: 'Nebraska',
      image: './assets/images/lexus.jpg',
    },
    {
      model: 'Skoda Fabia',
      year: 2011,
      producer: 'Volkswagen',
      price: 6000,
      owner: 'Peter Wrobel',
      'tel/mobile': '+5810456455456',
      mileage: 67000,
      registered: 'Poland',
      image: './assets/images/Fabia1.JPG',
    },
    {
      model: 'Hyundai Getz',
      year: 2008,
      producer: 'Hyundai',
      price: 8900,
      owner: 'Mike Smith',
      'tel/mobile': '+5810456445456',
      mileage: 12000,
      registered: 'USA',
      image: './assets/images/hyundai_getz2.jpg',
    },
    {
      model: 'Hyundai i108',
      year: 2014,
      producer: 'Hyundai',
      price: 15000,
      owner: 'Camil Bertrand',
      'tel/mobile': '+5810456445456',
      mileage: 3000,
      registered: 'Canada',
      image: './assets/images/hyundaii108.jpg',
    },
    {
      model: 'Aveo',
      year: 2000,
      producer: 'Chevrolette',
      price: 3500,
      owner: 'Jose Hernandez',
      'tel/mobile': '+5815556445477',
      mileage: 13000,
      registered: 'Mexico',
      image: './assets/images/aveo.jpg',
    },
    {
      model: 'Liberty',
      year: 2016,
      producer: 'Jeep',
      price: 21300,
      owner: 'Tom Price',
      'tel/mobile': '+13805489900',
      mileage: 6500,
      registered: 'New Hampshire',
      image: './assets/images/jeep.jpg',
    },
    {
      model: 'Uno',
      year: 2000,
      producer: 'Fiat',
      price: 58900,
      owner: 'Tony Santucci',
      'tel/mobile': '+248650098227',
      mileage: 92000,
      registered: 'Italy',
      image: './assets/images/fiat_uno.jpg',
    },
    {
      model: 'IS200',
      year: 2011,
      producer: 'Lexus',
      price: 12890,
      owner: 'Maria Lombardi',
      'tel/mobile': '+14029874736682',
      mileage: 75000,
      registered: 'Nebraska',
      image: './assets/images/lexus.jpg',
    },
    {
      model: 'Skoda Fabia',
      year: 2011,
      producer: 'Volkswagen',
      price: 6000,
      owner: 'Peter Wrobel',
      'tel/mobile': '+5810456455456',
      mileage: 67000,
      registered: 'Poland',
      image: './assets/images/Fabia1.JPG',
    },
    {
      model: 'Hyundai Getz',
      year: 2008,
      producer: 'Hyundai',
      price: 8900,
      owner: 'Mike Smith',
      'tel/mobile': '+5810456445456',
      mileage: 12000,
      registered: 'USA',
      image: './assets/images/hyundai_getz2.jpg',
    },
    {
      model: 'Hyundai i108',
      year: 2014,
      producer: 'Hyundai',
      price: 15000,
      owner: 'Camil Bertrand',
      'tel/mobile': '+5810456445456',
      mileage: 3000,
      registered: 'Canada',
      image: './assets/images/hyundaii108.jpg',
    },
    {
      model: 'Aveo',
      year: 2000,
      producer: 'Chevrolette',
      price: 3500,
      owner: 'Jose Hernandez',
      'tel/mobile': '+5815556445477',
      mileage: 13000,
      registered: 'Mexico',
      image: './assets/images/aveo.jpg',
    },
    {
      model: 'Liberty',
      year: 2016,
      producer: 'Jeep',
      price: 21300,
      owner: 'Tom Price',
      'tel/mobile': '+13805489900',
      mileage: 6500,
      registered: 'New Hampshire',
      image: './assets/images/jeep.jpg',
    },
    {
      model: 'Uno',
      year: 2000,
      producer: 'Fiat',
      price: 58900,
      owner: 'Tony Santucci',
      'tel/mobile': '+248650098227',
      mileage: 92000,
      registered: 'Italy',
      image: './assets/images/fiat_uno.jpg',
    },
    {
      model: 'IS200',
      year: 2011,
      producer: 'Lexus',
      price: 12890,
      owner: 'Maria Lombardi',
      'tel/mobile': '+14029874736682',
      mileage: 75000,
      registered: 'Nebraska',
      image: './assets/images/lexus.jpg',
    },

  ])
})

app.listen(port, () => {
  console.log('selling cars on port', port);
})
