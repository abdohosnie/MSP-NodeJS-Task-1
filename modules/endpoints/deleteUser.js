const fs = require('fs');

const deleteUser = (req, res) => {
  const { id } = req.body;
  fs.readFile('./modules/data/users.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    const users = JSON.parse(data);
    const userIndex = users.users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      users.users.splice(userIndex, 1);

      fs.writeFile('./modules/data/users.txt', JSON.stringify(users), (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Internal server error' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
      });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  });
};

module.exports = deleteUser;
