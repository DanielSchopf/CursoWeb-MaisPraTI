function fibonacci(num) {
    let a=0
    let b=1
    for(let j= 1; j<=num; j++) {
         let c=a
         a=b
         b+=c
    }
    return b
 }
 
 let numeros= []
 for(let i = 0; i<15; i++) {
     numeros[i]= fibonacci(i)
 }

 console.log("Vetor contendo os 15 primeiros números da sequência de fibonacci: "+ numeros)
 