document.getElementById("btn-deposit").addEventListener("click", function () {
  const newDepositAmount = getInputFieldById("deposit-field");
  const previousDepositTotal = getElementValueById("deposit-total");
  const depositTotalAmount = newDepositAmount + previousDepositTotal;
  setTextElementValueById("deposit-total", depositTotalAmount);

  const previousBalanceTotal = getElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});
