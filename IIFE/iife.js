//2 exemplos de IIFE

var nome = (function(){
    const name = 'Alice'
    return name
}
)()

console.log(nome)


(function(){
    let result = 20+5
    console.log(`${result}`);
}
)()
