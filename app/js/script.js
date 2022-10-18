fetch(
  "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd&include_24hr_change=true"
)
  .then((res) => res.json())
  .then((json) => {
    const priceInfoCtn = document.querySelector(".priceInfo_ctn");
    const sol = Object.getOwnPropertyNames(json);
    const coinInfo = json[sol];
    const price = coinInfo.usd;
    const change = coinInfo.usd_24h_change.toFixed(2);

    priceInfoCtn.innerHTML += `
            <p>SOL PRICE :</p>
            <p>${price}$</p>
            <p class=${change < 0 ? "red" : "green"}>${change}%</p>
        `;
  });

function calc() {
  const resetBtn = document.querySelector("#resetBtn");
  const buyAmount = document.querySelector("#buyAmount").value;
  const saleAmount = document.querySelector("#saleAmount").value;
  const percentage = document.querySelector("#royalties").value / 100;
  const royalties = saleAmount * percentage;
  const output = document.querySelector("#output");
  const total = saleAmount - royalties;
  const gain = saleAmount - royalties - buyAmount;

  resetBtn.style.display = "block";

  if (total + gain < buyAmount) {
    output.innerHTML = `Total amount credited to your wallet will be ${total} sol and your loss is ${Math.abs(
      gain
    )} sol ☹️`;
  } else {
    output.innerHTML = `Total amount credited to your wallet will be ${total} sol and your gain is ${gain} sol 😊 `;
  }
}
