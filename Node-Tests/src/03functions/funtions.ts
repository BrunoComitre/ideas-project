// Exemplo de uma função rest (...)
function addNumbers(message: string, ...nums: number[]): void {
    var i: any;
    var sum: number = 0;

    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }

    console.log(message, sum)
}

addNumbers("Contagem 1", 1, 2, 3)

addNumbers("Contagem 2", 10, 10, 10, 10, 10)
