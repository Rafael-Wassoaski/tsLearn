type ToDo = {
    title: string,
    description: string,
    completed: boolean
}

const todo: Readonly <ToDo> ={
    title: 'Ver isso',
    description: 'tem que ver isso aqui',
    completed: false,
}

console.log(todo);

//todo.completed = true; //com o Readonly ali podemos trasnformar todos os campos do objeto em readOnly sem mexer direto no
//type

console.log(todo);

//O generic Partial deixa todas as propriedades do typo passado como Opcionais (?)
function updatedTodo(todo: ToDo, fieldToUpdate: Partial<ToDo>){
    return {...todo, ...fieldToUpdate};
}

const todo2: ToDo = updatedTodo(todo, {completed: true})

console.log(todo2);

//Pick pega as propriedades passadas do type passado, para poder usar so alguns elementos internos e nao extender td
type TodoPreview = Pick<ToDo, 'title' | 'description'>;

const todoPreview: TodoPreview = {
    title: 'Opa',
    description: 'Epa'
}

//Omit baseado no tipo que a gente tem, ele omite o que vc passar
type TodoOmited = Omit<ToDo, 'title' | 'description'>
const todoOmited: TodoOmited = {
    completed: false
}

//quando usar um ou outro? obvio quando vc quiser pegar mais coisas use o Omit, quando quiser pegar poucas use o Pick