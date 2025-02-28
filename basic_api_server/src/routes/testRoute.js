import express from 'express';
import userTest from '../controller/userTest.js';

const routes = express.Router();

routes.get('/user',userTest);

export default routes