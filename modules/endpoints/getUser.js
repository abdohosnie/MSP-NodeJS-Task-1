const fs = require('fs');

const getUserById = (req, res) => {
  const { id } = req.body;
  fs.readFile('./modules/data/users.txt', 'utf8', (err, data) => {
    console.log(JSON.parse(data))
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    
    const users = JSON.parse(data);
    const user = users.users.find((user) => user.id === id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  });
};

module.exports = getUserById;
