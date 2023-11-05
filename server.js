const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
console.log(process.env);

const app = require('./app.js');
//   START SERVER
const port = process.env.PORT || 2000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
