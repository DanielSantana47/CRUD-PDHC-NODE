import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import taskRoutes from './routes/tasksRoutes';

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.disable('x-powered-by');

server.use('/tasks', taskRoutes);

server.get('/', (req, res) => {
    res.send('API is running 🚀');
});

export default server;