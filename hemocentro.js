const readline = require ('readline-sync');

//isso é um array
let bancoDeDados = [];


function cadastrarDoador(){
    console.log("====== CADASTRO DE DOADOR ======")
    let nome = readline.question("nome do doador: ");
    let idade = readline.question("idade do doador: ");
    let peso = readline.question("peso do doador: ");
    let tipo = readline.question("tipo sanguíneo do doador: ");
    let data = readline.question("data da última doação do doador: ");


    let novoDoador = {
        nome : nome, 
        idade: idade,
        peso: peso,
        tipo: tipo,
        ultimaDoacao: data
    
    };
    bancoDeDados.push(novoDoador)
}

function listaDoadores(){
    console.log("--------------------\nLISTAGEM DE DOADORES\n:--------------------")
    console.log("NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO")
    console.log("-----------------------------------------------------------------")
    
    for (let i = 0; i < bancoDeDados.length; i++) {
        console.log(`${bancoDeDados[i].nome.padEnd(17, " ")}| ${bancoDeDados[i].idade.padEnd(4, " ")}| ${bancoDeDados[i].peso.padEnd(3, " ")}| ${bancoDeDados[i].tipo.padEnd(13, " ")}| ${bancoDeDados[i].ultimaDoacao.padEnd(15, " ")}`)
    }

}

function tipoSanguineo(){
    console.log("--------------------\nBUSCAR DOADORES POR TIPO SANGUÍNEO\n:--------------------")
    let tipoSanguineo = readline.question('tipo sanguíneo:')
    console.log("------------------")
    console.log('RESULTADO DA BUSCA:')
    console.log("------------------")
    console.log("NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO")
    console.log("-----------------------------------------------------------------")
    for (let i = 0; i < bancoDeDados.length; i++) {
        if(bancoDeDados[i].tipo === tipoSanguineo){
            console.log(`${bancoDeDados[i].nome.padEnd(17, " ")}|, ${bancoDeDados[i].idade.padEnd(4, " ")}|, ${bancoDeDados[i].peso.padEnd(3, " ")}|, ${bancoDeDados[i].tipo.padEnd(13, " ")}|, ${bancoDeDados[i].ultimaDoacao.padEnd(15, " ")}`)
        }
    
    }
    console.log("-----------------------------------------------------------------")
}

function buscarPorUltimaDoacao(){
    console.log("--------------------\nBUSCAR DATA DE ULTIMA DOACAO\n:--------------------")
    let data = Number(readline.question('Digite a data desejada:'))
    console.log('RESULTADO DA BUSCA:')
    console.log("------------------")
    console.log("NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO")
    console.log("-----------------------------------------------------------------")
    for (let i = 0; i < bancoDeDados.length; i++) {
        if(Number(bancoDeDados[i].ultimaDoacao.slice(-4)) <= data){
            console.log(`${bancoDeDados[i].nome.padEnd(17, " ")}|, ${bancoDeDados[i].idade.padEnd(4, " ")}|, ${bancoDeDados[i].peso.padEnd(3, " ")}|, ${bancoDeDados[i].tipo.padEnd(13, " ")}|, ${bancoDeDados[i].ultimaDoacao.padEnd(15, " ")}`)
        }

    }
    console.log("-----------------------------------------------------------------")
} 


//função menu
function exibirMenu(){
    let opcao = '';
    while(opcao !== '5'){
        console.log('1. cadastrar doador');
        console.log('2. listar doadores');
        console.log('3. buscar doador por tipo sanguíneo');
        console.log('4. buscar doador por data de última doação');
        console.log('5. sair');
        opcao = readline.question("Escolha uma opção:");
    

        switch(opcao){
            case '1':
               cadastrarDoador();
                break;
            case '2':
                listaDoadores();
                break;
            case '3':
                tipoSanguineo();
                break;
            case '4':
                buscarPorUltimaDoacao();
                break;
            case '5':
            console.log("sair...");
                break;
            default:
                console.log("Você escolheu uma opcao inválida. escolha outra opcao válida.")
    
        }
    }
}
    
exibirMenu()
