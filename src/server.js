const express = require('express') // Estou importando o express para criar o server
const server = express() // setamos uma variavel server para receber a funcao do express
server.use(express.static("public")) // coloquei o public para ser lido como pasta rais usando a funcao static e passando o nome do arquivo que vai ser statico

const { pageLanding, pageStudy, giveClasses, saveClasses, thankyou } = require('./pages')

// aqui eu estou usando o GET para fazer uma requisicao no "/"
// onde vou passar uma arrow function com parametros de requisicao(req) e resposta(res)
// que vai me mostrar uma mensagem com o return res.send
// receber os dados do req.body
server.use(express.urlencoded({extended: true}))
server.get("/", pageLanding) 
server.get("/study", pageStudy) 
server.get("/give-classes", giveClasses)
server.get("/congratulations", thankyou)
server.post("/congratulations", saveClasses) 
server.listen(5500) // estou adicionando o evento de escutar na porta do servidor

// Configurar NUNJUCKS
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})
