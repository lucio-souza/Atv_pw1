import express from 'express';

const app =express();
app.use(express.json())
const port=8080;

app.listen(port,()=>{
    console.log(`aplicação rodando na porta ${port}`);
    
})
