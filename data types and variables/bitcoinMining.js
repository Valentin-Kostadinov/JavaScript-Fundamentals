function bitcoinMining(data) {
  const goldValue = 67.51;
  const bitcoinValue = 11949.16;

  let firstDay = 0;
  let totalMoney = 0;

  let bitcoinCount = 0;

  for (let day = 1; day <= data.length; day++) {
    let currentGold = data[day - 1];

    if (day % 3 === 0) {
      currentGold *= 0.7;
      totalMoney += currentGold * goldValue;
    } else {
      totalMoney += currentGold * goldValue;
    }

    if (totalMoney >= bitcoinValue) {
      if (firstDay === 0) {
        firstDay = day;
      }
      bitcoinCount += parseInt(totalMoney / bitcoinValue);
      totalMoney -= parseInt(totalMoney / bitcoinValue) * bitcoinValue;
    }
  }
  console.log(`Bitcoins bought: ${bitcoinCount}`);
  if (firstDay > 0) {
    console.log(`Day of the first purchased bitcoin: ${firstDay}`);
  }
  console.log(`Left money: ${totalMoney.toFixed(2)}lv.`);
}

bitcoinMining([100, 200, 300]);
bitcoinMining([3124.15, 504.212, 2511.124]);
