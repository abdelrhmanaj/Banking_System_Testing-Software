package controller;

import model.Account;
import service.AccountService;

public class ClientController {

    private AccountService service = new AccountService();

    public String deposit(Account account, double amount) {
        if (service.processDeposit(account, amount)) {
            return "Deposit successful";
        }
        return "Deposit failed";
    }

    public String withdraw(Account account, double amount) {
        if (service.processWithdraw(account, amount)) {
            return "Withdrawal successful";
        }
        return "Withdrawal failed";
    }
}
