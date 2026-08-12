//returning total number in array
export function sum(numbers) {
    //(function(total, currentvalue, currentindex, array), initialvalue)
    return numbers.reduce((total, n) => total + n, 0);
}
export function average(numbers) {
    return sum(numbers) / numbers.length;
}
export function unique(array) {
    return [...new Set(array)];
}
export function chunk(array, size) {
    const result=[];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}    
export function intersectio(firstArray, secondArray) {
    const inboth = firstArray.filter(item => secondArray.includes(item));
    return unique(inboth);

}

