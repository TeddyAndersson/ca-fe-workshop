import todoRoutes from '@src/presentation/routes/todo.routes';
import { Express, Router } from 'express';

export default (app: Express): void => {
    const router = Router();
    todoRoutes(router);
  
    app.use('/api/', router);
  };
  