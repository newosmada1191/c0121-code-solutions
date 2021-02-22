/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0) {
    var account = new Account(this.nextAccountNumber, holder);
    var newTransaction = account.deposit(balance);
    account.transactions.push(newTransaction);
    this.accounts.push(account);
    this.nextAccountNumber++;
    return account.number;
  } else {
    return null;
  }
}

Bank.prototype.getAccount = function (number) {
  var account = null;
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number)
    account = this.accounts[i];
  }
  return account;
}

Bank.prototype.getTotalAssets = function () {
  var total = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    total += this.accounts[i].getBalance();
  }
  return total;
}
