// Кошельки для доната — впиши свои адреса (пустые не показываются).
const WALLETS = [
  { name: "USDT (TRC-20, TRON network)", address: "TF4y7g3dYDXXkuZBnLcCBsd8ux9eJ5BoFA" },
  { name: "USDT / USDC / ETH (Ethereum ERC-20 or BNB Smart Chain BEP-20)", address: "0x11D5AA3b5DA2dc4EC27C1EaF9b7bFff278eFf551" },
  { name: "Bitcoin (BTC)", address: "bc1qq687z85sy3797cchu7cex5zhvr2maj0a7agsha" },
];

(function () {
  const box = document.getElementById("wallets");
  if (!box) return;
  const ru = document.documentElement.lang === "ru";
  const list = WALLETS.filter(w => w.address);
  if (!list.length) {
    box.innerHTML = '<p class="muted">' + (ru ? "Скоро здесь появятся кошельки." : "Wallets coming soon.") + "</p>";
    return;
  }
  for (const w of list) {
    const row = document.createElement("div");
    row.className = "wallet";
    const title = document.createElement("b");
    title.textContent = w.name;
    const code = document.createElement("code");
    code.textContent = w.address;
    const copy = document.createElement("button");
    copy.type = "button";
    copy.textContent = ru ? "Скопировать" : "Copy";
    copy.addEventListener("click", async () => {
      try { await navigator.clipboard.writeText(w.address); copy.textContent = ru ? "Скопировано" : "Copied"; }
      catch (e) { copy.textContent = ru ? "Выдели и скопируй" : "Select and copy"; }
    });
    row.append(title, code, copy);
    box.append(row);
  }
})();
