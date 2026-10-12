function fibo(n) {
    // Validar que n sea un número entero positivo
    if (n <= 0) {
        return "El valor de n debe ser mayor o igual a 1";
    }

    // Casos base definidos en clase
    if (n === 1) {
        return 0;
    }
    if (n === 2) {
        return 1;
    }

    // Llamada recursiva
    let res = fibo(n - 1) + fibo(n - 2);
    return res;
}
