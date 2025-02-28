exports.createController = (req, res, next)=>{
    res.render('create')
}




//para o post
const fs = require('fs')
const path =  require('path')

exports.escrevePartida = (req, res, next)=>{
    try{
        res.send('no post da criacao da partida')
    const pastaDestino = path.join(__dirname, '..', 'data')
    const caminhoDoArquivo = path.join(pastaDestino, 'partidas.json')
    const partida = req.body


    let arrayJson = []
    let conteudo = fs.readFileSync(caminhoDoArquivo)
    conteudo = JSON.stringify(conteudo)
    console.log('conteudo:', conteudo)
    //se o arquivo json estiver vazio
    if(conteudo.trim()){
        try{
        fs.writeFileSync(caminhoDoArquivo, JSON.stringify(partida, null, 2), {flag: 'a'})
        console.log('passei pelo writefilesync de dentro do if')
        }catch(e){
            console.log('erro de manipulacao do json: ', e)
        }

        return
    }

    //se o arquivo json nao estiver vazio
    arrayJson.push(JSON.parse(conteudo))

    fs.writeFileSync(caminhoDoArquivo, JSON.stringify(arrayJson, null, 2), {flag: 'a'})
    console.log('passei pelo writefilesync de dentro do if')
    }catch(e){
        console.log('erro de manipulacao do json: ', e)
    }
}


