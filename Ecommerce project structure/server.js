const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
