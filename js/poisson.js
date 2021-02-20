// var k_total = 10;
// var landa = 8;
var exponential = 2.718281828;
// var total = 0;
// var numerator, denominator;

function Poisson(k, landa) {
    exponentialPower = Math.pow(exponential, -landa);
    landaPowerK = Math.pow(landa, k);
    numerator = exponentialPower * landaPowerK;
    denominator = fact(k);

    return (numerator / denominator);
}

// for (var i = 0; i < k_total; i++) {
//     total += poisson(i, landa);
// }
//
// console.log("Total sum is " + total);

function fact(x) {
   if(x==0) {
      return 1;
   }
   return x * fact(x-1);
}


function Exponential(k, landa) {
  return landa * Math.pow(exponential, -k * landa);
}
