/**
 * Обчислює, через скільки років (або скільки років тому) батько буде (або був) удвічі старший за сина.
 *
 * @param {number} fatherAge - поточний вік батька (обов'язково > 0)
 * @param {number} sonAge - поточний вік сина (обов'язково > 0)
 * @returns {number} Кількість років у майбутньому (додатне число) або у минулому (від’ємне число).
 * Повертає 0, якщо батько вже зараз удвічі старший за сина.
 * Повертає 9999 у разі некоректних вхідних даних:
 * - від’ємні віки,
 * - різниця у віці менше 15 років,
 */
function ageCheck(fatherAge, sonAge) {
  if (fatherAge < 0 || sonAge < 0 || fatherAge - sonAge < 15) {
    return 9999;
  }

  const x = fatherAge - 2 * sonAge;

  return x;
}

const fAge = Number(prompt("Скільки років батьку?"));

const sAge = Number(prompt("Скільки років сину?"));

const result = ageCheck(fAge, sAge);
console.log(result);

if (result < 9999) {
  if (result > 0) {
    const word =
      result % 10 === 1 && result % 100 !== 11
        ? "рік"
        : result % 10 >= 2 &&
            result % 10 <= 4 &&
            (result % 100 < 10 || result % 100 > 20)
          ? "роки"
          : "років";

    console.log(`Батько буде удвічі старший за сина через ${result} ${word}`);
  } else if (result < 0) {
    const yearsAgo = Math.abs(result);
    const word =
      yearsAgo % 10 === 1 && yearsAgo % 100 !== 11
        ? "рік"
        : yearsAgo % 10 >= 2 &&
            yearsAgo % 10 <= 4 &&
            (yearsAgo % 100 < 10 || yearsAgo % 100 > 20)
          ? "роки"
          : "років";

    console.log(`Батько був удвічі старший за сина ${yearsAgo} ${word} тому`);
  } else {
    console.log("Батько вже зараз удвічі старший за сина");
  }
} else {
  console.log("Невірний варіант вводу");
}
