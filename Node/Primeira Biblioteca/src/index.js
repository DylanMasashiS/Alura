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

    console.log (contagem);
}

function limparPalavras(palavra) {
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'');   
}

function verificarPalavras(texto) {
    const listarPalavras = texto.split (' ');
    const resultado = {};

    listarPalavras.forEach(palavra => {
        if (palavra.length >= 3) {
        const palavraLimpa = limparPalavras(palavra);
        resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1
        }
    })

    return (resultado);
}