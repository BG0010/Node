const express = require("express")  //importa express

const app = express()

//mandar mensagem para porta 3000
app.get('/', (requisicao, resposta) => {  //primeiro a rota depois o que vai receber ou enviar
    resposta.send("Seja bem-vindo(a) ao servidor negro!") //send significa enviar
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta porta 3000")
})

//usuário digita no chrome : http://localhost:3000/ 