const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())

app.get('/', (request, response) => {
    response.send('este cara sou eu');
})

app.get('/fofocaiada', (request, response) => {
    const noticia1 = {
        id: 1,
        texto: "faça imediatamente o ele",
        autor: "juninho pernambucano"
    }
    
    response.send(noticia1);
})

app.get('/fofocaiada/seara', (request, response) => {
    const noticia2 = {
        id: 2,
        texto: "ta podendo victor?",
        autor: "jhon week"
    }
    
    response.send(noticia2);
})

app.post('/soma', (request, response) => {
    const body = request.body;
    const numero1 = body.numero1;
    const numero2 = body.numero2;
    const resultado = {
        resultado: numero1 + numero2
    }

    response.send(resultado);
})

app.listen(port, () => {
    console.log("Sevidor iniciado na porta " + port)
});