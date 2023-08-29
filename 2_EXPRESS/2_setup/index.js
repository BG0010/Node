const express = require('express')

const app = express()

app.get('/', (requisicao, resposta) => {
    resposta.send('Eu sei que as ruas vão continuar com seus lixos, seus cinzas e suas possibilidades de destino. Eu sei que a poeira vai continuar dançando em volta do meu lustre enquanto eu tento me concentrar em duas ou três frases de um livro qualquer. Eu sei que eu posso muitas coisas sem você, e eu sei que, se eu tomar um banho quente e comprar uma roupa nova, talvez eu possa querer uma coisa que seja, só uma, sem você. Nada muda no mundo quando você não caminha ao meu lado, as pessoas quase não percebem que falta metade do meu corpo e que eu não posso ser muito simpática porque toda a minha energia está concentrada para eu não tombar. Ninguém deixa de espreguiçar só porque você não está aqui, ninguém deixa de molhar a torrada no café e de falar com voz idiota enquanto boceja. E eu odeio o mundo por isso, eu acho o mundo muito medíocre, eu tenho pena de todas essas pessoas que não sabem o que é encaixar o rosto no vão das suas costas e querer ser embalsamado ali por mil anos. Amor de verdade não acaba, é o que dizem, mas eu tenho medo.Eu tenho medo da força absurda que eu sinto sem você, de como eu tenho muito mais certeza de mim sem você, de como eu posso ser até mais feliz sem você. Pra não pensar na falta, eu me encho de coisas por aí. Me encho de amigos, bares, charmes, possibilidades, livros, músicas, descobertas solitárias e momentos introspectivos andando ao Sol. E todo esse resto de coisas deixa aos poucos de ser resto, e passa a ser minha vida, e passa a enterrar você de grão em grão, sujando seus dentes e olhos e nada eu posso com a pá que está na minha mão.')
})

app.listen(3333, () => {
    console.log('App rodando na porta 3333')
})