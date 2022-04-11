//Mult 3 fizz
//mult 5 buzz
//Mult 3 y 5 fizzbuzz

function fizzbuzz (lista){
    for(let i = 0; i < lista.length; i++){

        if((lista[i]% 3===0) && (lista[i]%5===0)){
            console.log(lista[i]+"fizzbuzz")
        }
        else if((lista[i]% 3===0)){
            console.log(lista[i]+"buzz")
        }
        else if((lista[i]% 5===0)){
            console.log(lista[i]+"fizz")
        }
    }
}
fizzbuzz([1,2,3,4,5,6,7,8,9,21,35,65,8,15,30,45])