const calcImc = (height, weight) => {
    // Imc formula
    let imc = weight / (height) ** 2;

    return imc;
}

console.log(calcImc(1.80, 70));