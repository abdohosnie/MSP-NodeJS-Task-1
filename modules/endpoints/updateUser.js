const fs = require('fs');

const updateUser = (req, res) => {
  const { id, email, age, country } = req.body;
  fs.readFile('./modules/data/users.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    const users = JSON.parse(data);
    const userIndex = users.users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      users.users[userIndex] = { id, email, age, country };

      fs.writeFile('./modules/data/users.txt', JSON.stringify(users), (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Internal server error' });
        }
        res.status(200).json({ message: 'User updated successfully' });
      });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  });
};

module.exports = updateUser;
