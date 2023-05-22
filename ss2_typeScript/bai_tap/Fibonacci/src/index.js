function fibonacci(n) {
    var sequence = [];
    if (n >= 1) {
        sequence.push(0);
    }
    if (n >= 2) {
        sequence.push(1);
    }
    for (var i = 2; i < n; i++) {
        var next = sequence[i - 1] + sequence[i - 2];
        sequence.push(next);
    }
    return sequence;
}
function sumArray(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
var arr = fibonacci(20);
var sum = sumArray(arr);
console.log("20 số fibonacci đầu tiền là: :", arr);
console.log("Tổng là: :" + sum);
