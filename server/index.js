const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

const tareaRoutes = require('./src/routes/tareaRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API running...' });
});

app.use('/api/tareas', tareaRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});