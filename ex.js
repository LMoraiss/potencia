let resultado = 0;

console.log("Digite a base: ");
process.stdin.once("data", function (data){
    let base = parseInt(data.toString().trim())
console.log("Digite o expoente: ");
process.stdin.once("data", function (data){
    let expoente = parseInt(data.toString().trim())

    resultado = base * base 
for (let num = 1; num <= base; num++){
    num = base * base 
    console.log("A base elevada ao expoente é igual a: " + num);
}
process.exit();
})
})