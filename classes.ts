abstract class UserAccount{
    public name: string;
    protected age: number;

    constructor(name: string, age: number){
        this.age = age;
        this.name = name;
    }

    get getName(){
        console.log('--------------- get name');

        return this.name;
    }
    get getAge(){
        console.log('--------------- get age');

        return this.age;
    }
    set setName(name: string){
        console.log('--------------- set name ', name);

        this.name = name;
    }
    set setAge(age: number){
        console.log('--------------- set age ', age);

        this.age = age;
    }

    logDetails(): void{
        console.log(`Nome do player ${this.name} e idade ${this.age}`);
    }
}

class CharAccount extends UserAccount{
    private nickname: string;
    readonly level: number;

    constructor(name: string, age: number, nickname: string, level: number){
        super(name, age);

        this.nickname = nickname;
        this.level = level;
    }

    logCharDetails(): void {
        console.log(`Player de nick ${this.nickname} tem level ${this.level}`);
    }
}


const rafa = new CharAccount('TESTE', 123123, 'OPAAAA', 123);
const meiaNoite = new CharAccount('Rafa', 23, 'MEIA_NOITE', 100);

rafa.logDetails();
meiaNoite.logDetails();
meiaNoite.logCharDetails();

console.log(meiaNoite.getAge);
console.log(meiaNoite.getName);

meiaNoite.setAge = 9999;
meiaNoite.setName = 'Teste';

console.log(meiaNoite.getAge);
console.log(meiaNoite.getName);