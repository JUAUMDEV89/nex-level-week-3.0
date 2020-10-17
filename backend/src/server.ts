import express from 'express';
import routes from './routes';
import path from 'path';
import 'express-async-errors';

import cors from 'cors';

import './database/connection';
import errorHandle from './errors/handle';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads',express.static(path.join(__dirname, '..', 'uploads')));

app.use(errorHandle);

app.listen(3333);
console.log('Sever running at http://localhost:3333');