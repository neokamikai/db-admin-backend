import express, { Express } from 'express';

class HttpListener {
  app: Express;

  constructor() {
    this.app = express();
  }
}

export default HttpListener;
