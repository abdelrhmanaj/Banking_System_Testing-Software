// Shared app utilities for client-side auth and account management (localStorage)
const APP = (function(){
    const LS = window.localStorage;
    const USERS_KEY = 'tp_users';
    const SESSION_KEY = 'tp_session';
    const TX_KEY = 'tp_transactions';

    function _read(key){
        try { return JSON.parse(LS.getItem(key)) || {}; } catch(e){ return {}; }
    }
    function _write(key, val){ LS.setItem(key, JSON.stringify(val)); }

    function seedIfNeeded(username){
        const users = _read(USERS_KEY);
        if (!users[username]){
            users[username] = {
                username,
                
                name: username.toUpperCase().split('@')[0],
                accountNumber: 'ACC-' + Math.floor(10000 + Math.random()*90000),
                balance: 1000,
                status: 'Verified' // Verified | Suspended | Closed
            };
            _write(USERS_KEY, users);
        }
        return users[username];
    }

    function login(username){
        if (!username) return null;
        seedIfNeeded(username);
        _write(SESSION_KEY, { username });
        return getCurrentUser();
    }

    function logout(){ LS.removeItem(SESSION_KEY); }

    function getCurrentUser(){
        const session = _read(SESSION_KEY);
        if (!session || !session.username) return null;
        const users = _read(USERS_KEY);
        return users[session.username] || null;
    }

    function requireAuth(){
        const u = getCurrentUser();
        if (!u) { window.location.href = 'login.html'; return null; }
        return u;
    }

    function updateBalance(username, newBalance){
        const users = _read(USERS_KEY);
        if (!users[username]) return null;
        users[username].balance = newBalance;
        _write(USERS_KEY, users);
        return users[username];
    }

    function addTransaction(username, type, amount, status='Success', meta){
        const txs = _read(TX_KEY);
        txs[username] = txs[username] || [];
        function fmt(d){
            return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0') + ' ' + String(d.getHours()).padStart(2,'0') + ':' + String(d.getMinutes()).padStart(2,'0') + ':' + String(d.getSeconds()).padStart(2,'0');
        }
        const tx = { dateTime: fmt(new Date()), type, amount, status, meta };
        txs[username].unshift(tx);
        _write(TX_KEY, txs);
        return tx;
    }

    function getTransactions(username){
        const txs = _read(TX_KEY);
        return txs[username] || [];
    }

    return {
        login, logout, getCurrentUser, requireAuth,
        updateBalance, addTransaction, getTransactions
    };
})();
