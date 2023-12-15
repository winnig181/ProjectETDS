const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const apiProductsRouter = require('./routes/apiProductsRouter');
const authRouter = require('./routes/authRouter');
const tokensRouter = require('./routes/tokensRouter');
const apiReviewsRouter = require('./routes/apiReviewsRouter');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan('dev'));
app.use(
  cors({
    credentials: true,
    origin: true,
  }),
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


// app.use('/api/v1/products', apiProductsRouter);
app.use('/api/v1/tokens', tokensRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/reviews', apiReviewsRouter);


app.listen(PORT, () =>
  console.log(`Server has started on PORT ${PORT}`),
);
