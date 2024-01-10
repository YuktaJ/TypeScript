import express from 'express';
import bodyParser from 'body-parser';
import todosRoutes from './routes/todo';
import cors from "cors";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(todosRoutes);

app.listen(3000);