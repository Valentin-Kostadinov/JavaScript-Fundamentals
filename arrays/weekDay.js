function weekDay(num) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (num >= 1 && num <= 7) {
    console.log(days[num - 1]);
  } else {
    console.log("Invalid day!");
  }
}

weekDay(2);
weekDay(3);
weekDay(4);
weekDay(33);
weekDay(-3);
