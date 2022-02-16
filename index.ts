const aValue = document.getElementById("aValue") as HTMLInputElement
const bValue = document.getElementById("bValue") as HTMLInputElement
const result = document.getElementById("result") as HTMLParagraphElement


function soma(a: number, b: number){
    return a + b;
}

function execSoma(){
    const a = Number(aValue.value);
    const b = Number(bValue.value);

    result.innerHTML = `${soma(a, b)}`
}