const fs = require ('fs');

const caminhoArquivo = process.argv;

const link = caminhoArquivo[2];

fs.readFile (link, 'UTF-8', (erro, texto) =>{
    verificarPalavras (texto);
})

function verificarPalavras(texto) {
    const listarPalavras = texto.split (' ');
    const resultado = {};
}