function solve(arr) {
  let heroes = [];
  for (const line of arr) {
    let [hero, level, items] = line.split(" / ");
    items = items
      .split(", ")
      .sort((a, b) => a.localeCompare(b))
      .join(", ");

    let heroObj = {
      Hero: hero,
      level: Number(level),
      items,
    };
    heroes.push(heroObj);
  }
  heroes
    .sort((a, b) => a.level - b.level)
    .forEach((hero) => {
      console.log(`Hero: ${hero.Hero}`);
      console.log(`level => ${hero.level}`);
      console.log(`items => ${hero.items}`);
    });
}

solve([
  "Isaac / 25 / Apple, Gravity Gun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
