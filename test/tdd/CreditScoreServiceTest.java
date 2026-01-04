package tdd;

import static org.junit.Assert.*;
import org.junit.Test;

public class CreditScoreServiceTest {

    @Test
    public void testLowCreditScore() {
        CreditScoreService service = new CreditScoreService();
        assertFalse(service.isEligible(450));
    }

    @Test
    public void testHighCreditScore() {
        CreditScoreService service = new CreditScoreService();
        assertTrue(service.isEligible(700));
    }
}
