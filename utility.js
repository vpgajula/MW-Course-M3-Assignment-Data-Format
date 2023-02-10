export const generateRandomNumber = function (minimum, maximum){
    return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}

console.log(`Running from utility js: ${generateRandomNumber(10, 100)}`);
