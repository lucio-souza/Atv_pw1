import express from 'express';
import userRouters from './routers/userRouters'
const app =express();
app.use(express.json())
const port=8080;

app.use('/Users',userRouters);

app.listen(port,()=>{
    console.log(`aplicação rodando na porta ${port}`);
})
