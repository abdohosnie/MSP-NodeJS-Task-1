const express = require('express');
const getUser = require('./modules/endpoints/getUser');
const addUser = require('./modules/endpoints/addUser');
const updateUser = require('./modules/endpoints/updateUser');
const deleteUser = require('./modules/endpoints/deleteUser');

const app = express();
app.use(express.json());

app.get('/user', getUser);
app.post('/user/add', addUser);
app.patch('/user/update', updateUser);
app.delete('/user/delete', deleteUser);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
  