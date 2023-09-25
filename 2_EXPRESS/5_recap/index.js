const express = require("express")  //importa express
const path = require("path")

const app = express()
const caminho = path.join(__dirname, "templates")  //dirname significa pasta

//mandar mensagem para porta 3000
app.get('/', (requisicao, resposta) => {  //primeiro a rota depois o que vai receber ou enviar
    // resposta.send("Seja bem-vindo(a) ao servidor negro!") //send significa enviar
    resposta.sendFile(`${caminho}/index.html`)

})

app.listen(3000, () => {
    console.log("Servidor rodando na porta porta 3000")
})

//usuário digita no chrome : http://localhost:3000/ 