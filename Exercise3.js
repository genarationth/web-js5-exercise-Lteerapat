//1
const xValue = i => {
    while (i > 0) {
        console.log(i);
        i -= 0.5;
    }
}
xValue(10)

//2
const findOdd = () => {
    let i = 1;
    while (i<=100) {
        console.log(i);
        i+=2;
    }
}
findOdd();

//3
const printNum = n => {
    let i =1;
    let Num = '';
    while (i <=n) {
        Num += `[${i}] `;
        i++;
    }
    
    return Num;
}
console.log(printNum(6));

//4
const sumNum = n => {
    let sum = 0;
    let i = 1;
    while (i <= n) {
        sum += i;
        i++;
    }
    return sum;
}
console.log(sumNum(5));


