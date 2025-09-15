const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const datas = [];

app.post('/api/update', (req, res) => {
  const { idd } = req.body;
  const user = datas.find((i) => i.ID == idd);
  if (user) {
    user.status = "completed";
    res.json({ message: "Updated successfully", data: user });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.post('/api/submitForm', (req, res) => {
  const { ID, title, description, status } = req.body;
  const obj = { ID, title, description, status};
  datas.push(obj);
  res.json({ message: 'Data received', data: obj });
});

app.get('/api/getForm', (req, res) => {
  res.json(datas);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
