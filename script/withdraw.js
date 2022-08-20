document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldById("withdraw-field");
  const previousWithdrawTotal = getElementValueById("withdraw-total");
  const withdrawTotalAmount = newWithdrawAmount + previousWithdrawTotal;
  setTextElementValueById("withdraw-total", withdrawTotalAmount);

  const previousBalanceTotal = getElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});
