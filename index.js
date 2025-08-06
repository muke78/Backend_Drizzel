import express from 'express';
import morgan from 'morgan';
import storeRoutes from './src/routes/store.routes.js'
import productRoutes from './src/routes/product.routes.js'

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/store', storeRoutes)
app.use('/product', productRoutes)

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
