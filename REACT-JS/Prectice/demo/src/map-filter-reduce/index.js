const arr = [1, 4, 7, 9]

function findsum(arr) {
    let sum = 0;
    for (let i = 0; i <= arr.length; i++){
        sum = sum+arr[i]
    }
    return sum;
}
console.log(findsum(arr));