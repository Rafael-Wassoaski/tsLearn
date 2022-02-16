//boolean (true / false)
let verdadeiro: boolean = false;

//string (''/""/``)
let teste: string = `opa ${verdadeiro}`;

//number (int, float, real, hex, binary)
let dois: number = 5;

//array
let items: string[] = ['123','3421'];
let values: Array<number> = [123,12313];

//tuple
let titles: [number, string] = [123, '123'];

//enum
enum Colors{
white = '1234',
black = '0000'
};

let chaveValores: Colors

//any (qualquer coisa) = RUIM
let coisa: any = true;
coisa = 'q231';
coisa = 123;

//void 
function logger(): void{
    console.log('opa');
}

//null / undefined
//tbm definicao de tipo
type bla = String | undefined;
let nula: null

//never
throw new Error('OPA'); //erro nao eh um retorno de nada, ele nunca retorna, ele para tudo

//object qualquer coisa que nao seja desses tipos anterioes
let kart: object;
kart = {
    opa: 'erpa'
};

//type de objeto
type esseType = {
    meuNome: string;
    minhaIdade: number | undefined;
    meuJob?: string | undefined;
}

const eu: esseType = {
    meuNome: "Rafa",
    minhaIdade: 23,
}

//extendendo types
type uid = number | string;
type name = string | undefined;
type pessoa = uid & name;
type carror = uid & name & {
    nome: string
}

type teste = string | number;
type teste = string | null;
//desvantagem: types sao unicos por escopo, nao podem redeclarar ou "mergear" como interface

type TupleT = [number, number];
//vantagem: podemos declarar tuplas com types, onde ele vai controlar a quantidade de valores no array e seus tipos
//diferente da interface
const ehTupla: TupleT = [1, 2];

//quando usar type ao inves de interface? facilita para escrever menos, eh mais simples e podemos trabalhar mais facilmente
//com tipos primitivos, mais recomendado na maiora das vezes. Inicie usando type e se tiver alguma necessidade de 
//extender vai pra interface
//Props do React por exemplo com type fica mais simples