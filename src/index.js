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

if (result < 9999) {
  if (result > 0) {
    if (result === 1) {
      console.log("Батько буде удвічі старший за сина через 1 рік");
    } else if (result >= 2 && result <= 4) {
      console.log(`Батько буде удвічі старший за сина через ${result} роки`);
    } else {
      console.log(`Батько буде удвічі старший за сина через ${result} років`);
    }
  } else {
    const yearsAgo = Math.abs(result);

    if (yearsAgo === 1) {
      console.log("Батько був удвічі старший за сина 1 рік тому");
    } else if (yearsAgo >= 2 && yearsAgo <= 4) {
      console.log(`Батько був удвічі старший за сина ${yearsAgo} роки тому`);
    } else {
      console.log(`Батько був удвічі старший за сина ${yearsAgo} років тому`);
    }
  }
} else {
  console.log("Невірний варіант вводу");
}
