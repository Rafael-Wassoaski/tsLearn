//Letras de generic
// S = state
// T = type
// K = key
// V = value
// E = element
// mas pode ser qualquer letra (simbolo), ele representa que a funcao vai poder trabalhar com algo do tipo S(nesse exemplo 
//eh S)

function useState<S extends number | string = string>(){
    let state: S;

    function getState(){
        return state;
    }

    function setState(newState: S){
        state = newState;
    }

    return {getState, setState};
}

const newState1 = useState<boolean>();
const newState2 = useState(); // com o = string la em cima ele fica por default com a string
const newState = useState<string>();

newState.setState("!"); //eh uma string, dps disso nao muda mais
console.log(newState.getState());

newState.setState(321); //aqui por exemplo nao entraria, daria erro pq ta definido como string ali em cima
console.log(newState.getState())