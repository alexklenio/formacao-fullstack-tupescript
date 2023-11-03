const array: number[] = [1, 2, 3, 4, 5,];

/*const stringArray: array<string> = ['a', 'b', 'c', 'd']

const buscaNum = array.find(num => num > 2)

console.log(buscaNum)*/

array.forEach(num => {
    if (num > 2 && num % 2 === 0) {
        console.log(num * 2)
    }
})

array.map(num => console.log(num))