import express from 'express';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json()); // requisições vao poder obter respostas no formato json
  }

  routes() {
    this.server.use(routes); // como as rotas tbm sao middlewares, dá pra passar pelo use
  }
}

export default new App().server;
