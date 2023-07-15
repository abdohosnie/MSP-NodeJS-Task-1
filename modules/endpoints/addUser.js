const fs = require('fs');

const addUser = (req, res) => {
  const { id, email, age, country } = req.body;
  fs.readFile('./modules/data/users.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    const users = JSON.parse(data);
    const newUser = { id, email, age, country };
    users.users.push(newUser);

    fs.writeFile('./modules/data/users.txt', JSON.stringify(users), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
      }
      res.status(201).json({ message: 'User added successfully' });
    });
  });
};

module.exports = addUser;
