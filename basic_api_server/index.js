
import express from 'express';
import routes from './src/routes/testRoute.js';
import cors from 'cors'
const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded());

app.use('/api/test',routes);


const PORT = 4000;

app.listen(PORT,()=>{
    console.log(`server in running http://localhost:${PORT} `)
})