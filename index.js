import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

// Use environment variable for port, with 3000 as fallback
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    description: 'Backend Drizzel',
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
