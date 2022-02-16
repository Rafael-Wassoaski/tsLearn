//@Component
//@Selector
//@useState('dasdas')
//isso são decorators, quase como annotation do java
//Decorator é uma declaração ou anotação de que pode ser anexada em funções e classe
//ele trabalha adicionando coisas novas em cima dessas parter anotadas, para adicionar novos elementos por exemplo


//Padrão Factory, cria uma funcao que retorna a criação de algo
function logger2(prefix: string){
    return (target)=>{
        //decorator é uma funcao como qualquer outra funcao, que recebe parametros padroes
        //isso eh um decorator de classe
        console.log(`prefix ${prefix} ${target}`);
    }
    
}

@logger2('awesome')
class Foo{}


//decorator notar versao da api
function setApiVersion(apiVersion: string){
    return (target)=>{
        return class extends target{
            version = apiVersion
        }
    }

}

@setApiVersion('1.0.0')
class Api{
}

console.log(new Api());

//Property decorator
function validadeMovieName(length: number){
    //target é o prototype da classe
    //key nome da propriedade que a gente ta trabalhando
    return (target: any, key: string)=>{
            let val = target[key];

            const getter = () => val;
            const setter = (newVal: string) => {
                if(newVal.length < length){
                    console.log('Novo valor invalido');
                    return false;
                }

                val = newVal;
            }

            Object.defineProperty(target, key, {
                get: getter,
                set: setter
            });
    }
}
class Movie{
    @validadeMovieName(5)
    title: string;

    constructor(title: string){
        this.title = title;
    }
}

const movie: Movie = new Movie('Star wars');
console.log(movie.title);


//method decorator

//decorator vai esperar um tempo e rodar o metodo dps (em ms)

function sleep(sleepTime: number){
    return (target: any, key: string, description: PropertyDescriptor) =>{
        const originalMethod = description.value;

        description.value = function (...args){
            console.log('Esperando o tempo de acordar');
                setTimeout(()=>{
                    originalMethod.apply(this, args);
                }, sleepTime)
        }

        return description;
    }

}
class Greeter{
    private greeting: string;

    constructor(greeting: string){
        this.greeting = greeting;
    }

    @sleep(4000)
    greet(){
        console.log(`Hello ${this.greeting}`);
    }
}

const pessoa = new Greeter('Ola');
pessoa.greet();