const fs = require ('fs');

const caminhoArquivo = process.argv;

const link = caminhoArquivo[2];

fs.readFile (link, 'UTF-8', (erro, texto) =>{
    verificarPalavras (texto);
})

function quebraParagrafos(texto) {
    const paragrafos = texto.toLowerCase().split ('\n');
    const contagem = paragrafos.map((paragrafo) => {
        return verificarPalavras(paragrafo);
    })
}

function verificarPalavras(texto) {
    const listarPalavras = texto.split (' ');
    const resultado = {};

    verificarPalavras.forEach(palavra => {
        resultado[palavra] = (resultado[palavra] || 0) + 1
    })

    console.log (resultado);
}