class Adition {
  result(number) {
    let final = 4;
    let denominator = 3;

    if (number < 1) {
      return false;
    } else {
      for (let i = 1; i <= number; i++) {
        final = final + 4 / denominator;
        denominator = denominator + 2;
      }
    }

    return final;
  }
}

let case1 = new Adition();

console.log(case1.result(15));
