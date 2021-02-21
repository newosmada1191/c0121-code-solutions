/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0) {
    var account = new Account(this.nextAccountNumber, holder);
    var newTransaction = new Transaction("deposit", balance);
    account.transactions.push(newTransaction);
    this.accounts.push(account);
    this.nextAccountNumber++;
    return account.number;
  } else {
    return null;
  }
}

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number)
    var account = this.accounts[i];
    return account;
  } else {
    return null;
  }
}

Bank.prototype.getTotalAssets = function () {

}
