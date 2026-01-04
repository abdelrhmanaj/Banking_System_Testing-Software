package blackbox;

import static org.junit.Assert.*;
import org.junit.Test;
import model.Account;

public class AccountBlackBoxTest {

    @Test
    public void testNegativeDeposit() {
        Account acc = new Account(100, "Verified");
        assertFalse(acc.deposit(-50));
    }

    @Test
    public void testValidDeposit() {
        Account acc = new Account(100, "Verified");
        assertTrue(acc.deposit(50));
    }

    @Test
    public void testOverdraftWithdrawal() {
        Account acc = new Account(100, "Verified");
        assertFalse(acc.withdraw(200));
    }
}
