//<script src="fizzbuzz.js"></script>
function fizzBuzz(array1,array2){
    if (sum%3===0){
        return ("Fizz");
    }
    else if(sum%5===0){
        return ("Buzz");
    }
    else if(sum%3===0 && sum%5===0){
        return ("FizzBuzz");
    }
    else {
        return sum;
    }
}
let array1=[1,2,3,4,5,6,7,8,9];
let array2=[1,2,3,4,5];
let sum=array1.length + array2.length;
console.log(fizzBuzz(array1,array2));

module.exports = fizzBuzz;







  