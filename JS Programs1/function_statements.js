/**
 * A little testing condition :)
 * @param {number} condition 
 * @returns 
 */

function test(condition){
    if (condition !== '12'){
        return "It is true!";
    }
    return "It is false";
}

console.log(test(12));