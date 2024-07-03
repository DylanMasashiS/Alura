const fs = require ('fs');

/*require faz parte do Node, sendo assim um modo para chamar bibliotecas do proprio Node.
FS é File System que significa Arquivos do Sistema onde podemos procurar dentre os Arquivos
do Computador o que queremos importar no index para que ele seja executado.
O require tbm ele so executa arquivos JS e JSON (que tbm é equivalente ao JS), por isso chamamos
o File System.*/

const caminhoArquivo = process.argv;

/*O Argv significa Argument Vector ou Vetor de Argumento. Ele simplesmente joga a informação num array
com base na ordem que os processos forem executados.*/

const link = caminhoArquivo[2];

/*O array 2 é para que ele mostre apenas a partir do proximo arquivo do segundo arquivo.
Lembrando que a const link ele mostra o caminho do computador onde está instalado a versao do Node
e dps ele mostra o caminho onde o arquivo que executamos está, por isso se não houver essa indicação
de por onde começar, ele irá mostrar até msm esses caminhos dentro do array, pois tudo que o process.argv
mostra é mostrado dentro de um array/objeto.*/

fs.readFile (link, 'UTF-8', (erro, texto) =>{
    console.log(texto);
})

/*
A função do ReadFile que nada mais é do que uma função que lê arquivos do proprio Node, requisita parametros para que funcione.
Dessa forma percebemos que o 'Link' é o caminho que está o File/Arquivo que queremos que a função leia, o UTF-8
ele traduz para o formato que queremos de acordo com nossos padroes de escrita, sendo o UTF-8 o que usamos no 
Brasil, para assim ter uma função callback de erro e 'acerto', que no caso podemos dar o nome que quisermos, tendo
em mente que o 'texto' é a constante que armazenará o resultado se acaso for um sucesso e finalmente partindo para a
arrow function que atribuirá por estar dentro de parenteses um objeto ao inves de um bloco de codigo,
que se de forma correta o objeto retorna 'sozinho' uma 'lista' tal qual a propria estrutura de um array sem necessidade
de usarmos o return, coisa que seria OBRIGATORIO quando falamos de bloco de codigo que também utilizamos as chaves
assim como no objeto.

Observação: O bloco de codigo é um escopo que utiliza de chaves e return, sem necessidade de fato ter uma 'resposta'.
Diferentemente do objeto que sao linhas estrutradas e consisas em suas 'respostas/finalidade'. Importante salientar que
blocos de codigo sao mais usados para determinar algum tipo de condição como if, else e for para que uma parte do codigo
funcione. Em termos abstratos pensemos em que o bloco seria a maquina de fazer sorvete e o objeto um cardapio onde podemos
escolher qual sorvete queremos e com qual cobertura, assim podendo ter varias versoes de um mesmo sabor de sorvete mas com
coberturas diferentes.
*/

/*
IMPORTANTE !!

Quando formos usar o terminal para visualizarmos precisamos seguir essa estrutura:

node src/index.js arquivos/texto-web.txt (Por exemplo)

onde src/index.js é o caminho do arquivo que queremos executar e arquivos/texto-web.txt
é o caminho que puxaremos para o index mostrar para nós o conteudo desejado.
*/

/*
1 - criar um array com palavras,
2 - contar ocorrências,
3 - montar um objeto com o resultado

*/

// Exemplo:
// {
//     "web": 5,
//     "computador": 3
// }

fs.readFile (link, 'UTF-8', (erro, texto) =>{
    verificarPalavras (texto);
})
function verificarPalavras(texto) {
    const listarPalavras = texto.split (' ');
    const resultado = {};

    listarPalavras.forEach(palavra => {
        resultado[palavra] = (resultado[palavra] || 0) + 1
    });
}

/* Split é uma função que divide uma string em um array de palavras
pela quebra de linha descrita em (' ') pois o parametro recebe um espaço
ao inves de vazio.
*/

//resultado guarda o resultado em um array com essas chaves.

/*
resultado receberá a propriedade 'palavra' ao qual criamos e que vai receber 
um valor, ou seja a propria palavra do texto que estamos querendo que o readFile 
leia. Se o valor existir adicionará o valor 'resultado + 1 ou atualizar' o contador
ou valor que inicialmente começará em 1 dentro da recente propriedade criada,senao 
ele cria uma nova propriedade com o nome da nova palavra, pois objetos é o mesmo que 
lista de cadastro que precisa das propriedades para funcionar e não vai dentro dos colchetes.
*/