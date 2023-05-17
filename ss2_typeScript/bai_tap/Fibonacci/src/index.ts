function fibonacci(n: number): number[] {
    const sequence: number[] = [];

    if (n >= 1) {
        sequence.push(0);
    }
    if (n >= 2) {
        sequence.push(1);
    }

    for (let i = 2; i < n; i++) {
        const next = sequence[i - 1] + sequence[i - 2];
        sequence.push(next);
    }

    return sequence;
}

function sumArray(numbers: number[]): number {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

const arr: number[] = fibonacci(20);
const sum: number = sumArray(arr);

console.log("20 số fibonacci đầu tiền là: :", arr);
console.log("Tổng là: :"+ sum);