package service;

import model.Account;

public class AccountService {

    public boolean processDeposit(Account account, double amount) {
        return account.deposit(amount);
    }

    public boolean processWithdraw(Account account, double amount) {
        return account.withdraw(amount);
    }

    public void suspendAccount(Account account) {
        account.setStatus("Suspended");
    }

    public void verifyAccount(Account account) {
        account.setStatus("Verified");
    }

    public void closeAccount(Account account) {
        account.setStatus("Closed");
    }
}
