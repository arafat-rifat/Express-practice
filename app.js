const express = require('express');

const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const app = express();
// MIDDLEWARES
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
// cREATE WON MIDDLEWARE
app.use((req, res, next) => {
  console.log('Hello Froom MiddleWare!!!!');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Example
// app.get('/', (req, res) => {
//   res.status(200).json({ message: 'Hello From Server Side', app: 'Natours' });
// });

// app.post('/', (req, res) => {
//   res.send('You Can post to this end point....');
// });
// End Example

// Routing Api

// app.get('/api/v1/tours', getAllTours);

// app.post('/api/v1/tours', createNewTour);

// app.get('/api/v1/tours/:id', getTour);

// app.patch('/api/v1/tours/:id', updateTour);

// app.delete('/api/v1/tours/:id', deleteTour);
//
//
// Routing Api in Chaining Methode AND REFECTORING CODE

// ROUTES for tour

// Check MiddleWare for : Thats only works before routing Url///
// app.use((req, res, next) => {
//   console.log('Hello Froom MiddleWare2!!!!');
//   next();
// });
//   Checking End -: End Yes Its Working ///
// ROUTES for tour

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/Users', userRouter);

module.exports = app;
