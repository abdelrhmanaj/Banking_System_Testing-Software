// Use shared APP utilities (app.js)
const user = APP.requireAuth();
if (!user) throw new Error('Not authenticated');

let status = user.status;   // Verified | Suspended | Closed
let balance = Number(user.balance);

const statusLabel = document.getElementById("status");
const balanceField = document.getElementById("balance");
const msg = document.getElementById("msg");

const clientName = document.getElementById('clientName');
const accountNumber = document.getElementById('accountNumber');
const amountField = document.getElementById('amount');
const recipientField = document.getElementById('recipient');

const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");
const transferBtn = document.getElementById("transferBtn");
const viewTxBtn = document.getElementById('viewTxBtn');
const logoutBtn = document.getElementById('logoutBtn');

function updateUI() {
    statusLabel.innerText = status;
    balanceField.value = balance.toFixed(2);
    clientName.value = user.name;
    accountNumber.value = user.accountNumber;

    if (status === "Verified") {
        depositBtn.disabled = false;
        withdrawBtn.disabled = false;
        transferBtn.disabled = false;
    }
    else if (status === "Suspended") {
        depositBtn.disabled = false;
        withdrawBtn.disabled = true;
        transferBtn.disabled = true;
    }
    else {
        depositBtn.disabled = true;
        withdrawBtn.disabled = true;
        transferBtn.disabled = true;
    }
}

function showMsg(txt, isError){
    msg.innerText = txt || '';
    msg.className = 'msg ' + (isError ? 'error' : 'success');
}

function validateAmount(amount) {
    if (isNaN(amount) || amount <= 0) {
        return { valid: false, reason: 'Invalid amount' };
    }
    return { valid: true };
}

depositBtn.onclick = () => {
    let amount = Number(amountField.value);
    const v = validateAmount(amount);
    if (!v.valid) {
        APP.addTransaction(user.username, 'Deposit', isNaN(amount) ? 0 : amount, 'Failed', { reason: v.reason });
        showMsg(v.reason, true);
        return;
    }

    balance += amount;
    APP.updateBalance(user.username, balance);
    APP.addTransaction(user.username, 'Deposit', amount, 'Success');
    showMsg('Deposit successful');
    updateUI();
};

withdrawBtn.onclick = () => {
    let amount = Number(amountField.value);
    const v = validateAmount(amount);
    if (!v.valid) {
        APP.addTransaction(user.username, 'Withdraw', isNaN(amount) ? 0 : -Math.abs(amount), 'Failed', { reason: v.reason });
        showMsg(v.reason, true);
        return;
    }

    if (amount > balance) {
        APP.addTransaction(user.username, 'Withdraw', -amount, 'Failed', { reason: 'Insufficient balance' });
        showMsg('Insufficient balance', true);
        return;
    }

    balance -= amount;
    APP.updateBalance(user.username, balance);
    APP.addTransaction(user.username, 'Withdraw', -amount, 'Success');
    showMsg('Withdrawal successful');
    updateUI();
};

transferBtn.onclick = () => {
    let amount = Number(amountField.value);
    const recipient = recipientField.value.trim();
    const v = validateAmount(amount);
    if (!v.valid) {
        APP.addTransaction(user.username, 'Transfer', isNaN(amount) ? 0 : -Math.abs(amount), 'Failed', { recipient: recipient || null, reason: v.reason });
        showMsg(v.reason, true);
        return;
    }
    if (!recipient) {
        APP.addTransaction(user.username, 'Transfer', -amount, 'Failed', { recipient: null, reason: 'Recipient required for transfer' });
        showMsg('Recipient required for transfer', true);
        return;
    }

    if (amount > balance) {
        APP.addTransaction(user.username, 'Transfer', -amount, 'Failed', { recipient, reason: 'Insufficient balance' });
        showMsg('Insufficient balance', true);
        return;
    }

    balance -= amount;
    APP.updateBalance(user.username, balance);
    APP.addTransaction(user.username, 'Transfer', -amount, 'Success', { recipient });
    showMsg('Transfer successful to ' + recipient);
    updateUI();
};

viewTxBtn.onclick = () => { window.location.href = 'transactions.html'; };
logoutBtn.onclick = () => { APP.logout(); window.location.href = 'login.html'; };

updateUI();

