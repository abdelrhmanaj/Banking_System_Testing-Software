package integration;

import static org.junit.Assert.*;
import org.junit.Test;
import model.Account;
import controller.ClientController;

public class ClientControllerIntegrationTest {

    @Test
    public void testDepositIntegrationFlow() {
        Account account = new Account(100, "Verified");
        ClientController controller = new ClientController();

        String response = controller.deposit(account, 50);

        assertEquals("Deposit successful", response);
        assertEquals(150, account.getBalance(), 0.001);
    }

    @Test
    public void testWithdrawIntegrationFlow() {
        Account account = new Account(200, "Verified");
        ClientController controller = new ClientController();

        String response = controller.withdraw(account, 100);

        assertEquals("Withdrawal successful", response);
        assertEquals(100, account.getBalance(), 0.001);
    }
}

