package whitebox;

import static org.junit.Assert.*;
import org.junit.Test;
import model.Account;

public class AccountWhiteBoxTest {

    @Test
    public void testWithdrawFromSuspendedAccount() {
        Account acc = new Account(100, "Suspended");
        assertFalse(acc.withdraw(50));
    }

    @Test
    public void testWithdrawValidPath() {
        Account acc = new Account(200, "Verified");
        assertTrue(acc.withdraw(100));
    }

    @Test
    public void testDepositClosedAccount() {
        Account acc = new Account(100, "Closed");
        assertFalse(acc.deposit(10));
    }
}
