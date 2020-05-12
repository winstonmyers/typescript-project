function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    if (showResult) {
        const result = n1 + n2;
        console.log(phrase + result);
    }
    else{
        return n1 + n2;
    }
}

const n1 = 5;
const n2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

const result = add(n1, n2, printResult, resultPhrase);

console.log(result);