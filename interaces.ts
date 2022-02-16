interface Game{
    title: string;
    description: string;
    readonly genre: string;
    platform?: string[];

    getSimilars: (title: string) => void;
}

interface Dlc extends Game{
    originalGame: Game
    horasDeJogoExtras: number
}

interface Game {
    empresa?: string;
}
//vantagem: interfaces podem ter mais de uma declaração, isso faz com que todas as declarações segam "mergeadas" 
//e as propriedades fiquem contidas na interface, aqui por exemplo a propriedade "empresa" foi declarada em uma interface
//tbm de nome Game, e agora faz parte da interface Game declarada mais acima


const theLastOfUs: Game = {
    title: 'The last of us',
    description: 'Jogo',
    genre: 'Action',
    platform: ['PC', 'Play'],
    empresa: 'Naughty dog',

    getSimilars: function(title: string){
        console.log(`Similar game to ${title}: Uncharted, Metro`);
    }
}

const theLastOfUsPt2: Dlc = {
    title: 'The last of us',
    description: 'Jogo',
    genre: 'Action',
    platform: ['PC', 'Play'],
    horasDeJogoExtras: 45,
    originalGame: theLastOfUs,
    empresa: 'Naughty dog',

    getSimilars: function(title: string){
        console.log(`Similar game to ${title}: Uncharted, Metro`);
    }
}

console.log(theLastOfUs.title);
console.log(theLastOfUs.genre);

theLastOfUs.getSimilars('The last of us');


class CreateGame implements Game{
    title: string;
    description: string;
    genre: string;
    platform?: string[] | undefined;

    constructor(t: string, d: string, g: string){
        this.title = t;
        this.description = d;
        this.genre = g;
    }

    getSimilars (title: string){
        console.log(title)
    }

}

interface ID extends number {}
//desvantagem: interfaces nao extendem tipos primitivos, tornando uma declaracao simples com types tendo que ser mais
//complexa como a seguir
interface user{
    id: number
}

interface Tuple{
    0: number;
    1: number;
}
//desvantagem: interfaces nao controlam a quantidade de propriedades em um elemento, por exemplo isso daqui nao eh uma tupla
//pois podemos adicionar muitos outros valores alem desses 2, inclusive valores de tipos diferentes
const eraPraSerTupla: Tuple = [1, 2, 3, 4, "123"]

//quando usar interface ao inves de type? quando estiver criando mais classes e objetos, trabalhando com POO
//(quando tiver criando uma lib por exemplo)
