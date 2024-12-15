function gladiatorExpenses(
  lostFights,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let total = 0;

  let brokenHelmets = Math.floor(lostFights / 2) * helmetPrice;
  let brokenSwords = Math.floor(lostFights / 3) * swordPrice;
  let brokenShields = Math.floor(lostFights / 6) * shieldPrice;
  let brokenArmors = Math.floor(lostFights / 12) * armorPrice;

  total = brokenHelmets + brokenSwords + brokenShields + brokenArmors;
  console.log(`Gladiator expenses ${total.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
