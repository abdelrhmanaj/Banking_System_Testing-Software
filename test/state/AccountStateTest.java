package state;

import static org.junit.Assert.*;
import org.junit.Test;
import model.Account;

public class AccountStateTest {

    @Test
    public void testDepositInClosedState() {
        Account acc = new Account(100, "Closed");
        assertFalse(acc.deposit(50));
    }

    @Test
    public void testWithdrawInSuspendedState() {
        Account acc = new Account(100, "Suspended");
        assertFalse(acc.withdraw(10));
    }

    @Test
    public void testAppealSuspendedToVerified() {
        Account acc = new Account(100, "Suspended");
        acc.setStatus("Verified");
        assertTrue(acc.deposit(20));
    }
}
