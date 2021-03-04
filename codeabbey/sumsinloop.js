//If you already learned how to write program with a simple loop from Sum in Loop task, this new exercise will be just a simple modification.

//Now we are given several pairs of values and we want to calculate sum for each pair.

const num1 = [100, 15, 1945];
const num2 = [8, 245, 54];
const sum = [];

for (i = 0; i < num1.length; i++) {
  sum.push(num1[i] + num2[i]);
}

console.log(sum.join(" "));
