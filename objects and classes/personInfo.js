function personInfo(value1, value2, value3) {
  let info = {
    firstName: value1,
    lastName: value2,
    age: value3,
  };
  for (let key in info) {
    console.log(`${[key]} : ${info[key]}`);
  }
}

personInfo("Peter", "Parker", "20");
