import { Express } from 'express';
import {bodyParser, contentType, cors } from '../middlewares'
import { errorHandler } from '../middlewares/error-handler';
export default (app: Express): void => {
    app.use(bodyParser);
    app.use(cors);
    app.use(contentType);
    app.use(errorHandler)
  };