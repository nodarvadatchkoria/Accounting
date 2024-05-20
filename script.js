document.getElementById('transactionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const accountCode = document.getElementById('accountCode').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;

    const accountRow = document.querySelector(`tr[data-account-code="${accountCode}"]`);
    if (!accountRow) {
        alert('Account not found!');
        return;
    }

    const debitCell = accountRow.querySelector('.debit');
    const creditCell = accountRow.querySelector('.credit');
    const balanceCell = accountRow.querySelector('.balance');
    const dateCell = accountRow.querySelector('.last-date');

    let debit = parseFloat(debitCell.textContent);
    let credit = parseFloat(creditCell.textContent);
    let balance = parseFloat(balanceCell.textContent);

    if (type === 'debit') {
        if (credit > 0) {
            if (credit >= amount) {
                credit -= amount;
                creditCell.textContent = credit.toFixed(2);
            } else {
                debit += (amount - credit);
                credit = 0;
                debitCell.textContent = debit.toFixed(2);
                creditCell.textContent = credit.toFixed(2);
            }
        } else {
            debit += amount;
            debitCell.textContent = debit.toFixed(2);
        }
        balance += amount;
    } else if (type === 'credit') {
        if (debit > 0) {
            if (debit >= amount) {
                debit -= amount;
                debitCell.textContent = debit.toFixed(2);
            } else {
                credit += (amount - debit);
                debit = 0;
                debitCell.textContent = debit.toFixed(2);
                creditCell.textContent = credit.toFixed(2);
            }
        } else {
            credit += amount;
            creditCell.textContent = credit.toFixed(2);
        }
        balance -= amount;
    }

    balanceCell.textContent = balance.toFixed(2);

    // Update the last accounting date
    const now = new Date();
    const formattedDate = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
    dateCell.textContent = formattedDate;
});
