function fizzBuzz(array1,array2){
    let sum=array1.length + array2.length;
    if(sum%3===0 && sum%5==0 ){
        return ("Fizzbuzz");
    }
    else if (sum%3==0){
        return ("Fizz");
    }
    else if(sum%5==0){
        return ("Buzz");
    }
    else {
        return sum;
    }
}
let array1=[1,2,3,4,5,6,7,8,9];
let array2=[1,2,3,4,5];
console.log(fizzBuzz(array1,array2));

module.exports = fizzBuzz;







  