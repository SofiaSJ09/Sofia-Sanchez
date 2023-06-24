

//Ejemplo recursivo
var res = fibonacci(3);
console.log(res);

function fibonacci(n){
    if( n <= 0 ){
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci (n - 2);
    }
}



 //Interativo ejemplo 3
 
function fibonacciInteractivo(n) {
    let fib = [0, 1];

    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib[n];
}

console.log(fibonacciInteractivo(5));
