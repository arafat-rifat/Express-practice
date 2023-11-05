const fs = require('fs');

const Users = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/users.json`)
);

// Route Handaler for Users

// const Users = JSON.parse(fs.readFile(`${__dirname}/dev-data/data/users.json`));

exports.getAllUsers = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: 'success',
    Time: req.requestTime,
    result: Users.length,
    data: {
      Users,
    },
  });
};

exports.createNewUser = (req, res) => {
  //   console.log(req.body);
  const newId = Users[Users.length - 1].id + 1;
  const newUser = Object.assign({ id: newId }, req.body);

  Users.push(newUser);
  fs.writeFile(
    `${__dirname}/dev-data/data/users.json`,
    JSON.stringify(Users),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          User: newUser,
        },
      });
    }
  );
};

exports.getUser = (req, res) => {
  console.log(req.param);
  const id = req.params.id * 1;
  const User = Users.find((el) => el.id === id);

  if (!User) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'Success',
    data: {
      User,
    },
  });
};

exports.updateUser = (req, res) => {
  if (req.params.id * 1 > Users.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      User: '<Updated tour here....>',
    },
  });
};

exports.deleteUser = (req, res) => {
  if (req.params.id * 1 > Users.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
};
