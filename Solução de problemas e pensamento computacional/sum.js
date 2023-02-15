const sum = (n1, n2) => {
    let sum;
    if (n1 && n2 !== 0) {
        sum = (n1 + n2) / 2;
    } else {
        return;
    }
    return sum;
}

console.log(sum(50, 130));