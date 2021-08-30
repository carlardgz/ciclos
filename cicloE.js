class Factorial {
  factorial(number) {
    let factorial = 1;

    for (let i = 1; i <= number; i++) {
      factorial = factorial * i;
    }

    return factorial;
  }

  result(number) {
    let final = 1;

    if (number < 1) {
      return false;
    } else {
      for (let i = 1; i <= number; i++) {
        final = final + 1 / this.factorial(i);
      }
    }
    return final;
  }
}

let case1 = new Factorial();
console.log(case1.result(15));
