const express = require('express');
const pool = require('./db');
const app = express();
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:5173'
}));
const port = 3000;
app.use(express.json());
app.get('/tasks', async (req, res) => {
    const result = await pool.query('SELECT * FROM tasks');
    res.json(result.rows);
});
app.post('/tasks', async (req, res) => {
    const { task, description, status } = req.body;
    const result = await pool.query('INSERT INTO tasks (task, description, status) VALUES ($1, $2, $3) RETURNING *', [task, description, status]);
    res.json(result.rows[0]);
});
app.delete('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
    res.json({ message: 'Task deleted' });
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});