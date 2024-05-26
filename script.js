
// Define the account codes array
const accountCodes = [
    { code: "1000", name: "Cash" },
    { code: "1010", name: "Petty Cash" },
    { code: "1020", name: "Cash on Hand" },
    { code: "1030", name: "Cash in Bank" },
    { code: "1040", name: "Savings Account" },
    { code: "1050", name: "Checking Account" },
    { code: "1100", name: "Accounts Receivable" },
    { code: "1110", name: "Accounts Receivable - Trade" },
    { code: "1120", name: "Accounts Receivable - Non-Trade" },
    { code: "1200", name: "Inventory" },
    { code: "1210", name: "Raw Materials Inventory" },
    { code: "1220", name: "Work In Progress Inventory" },
    { code: "1230", name: "Finished Goods Inventory" },
    { code: "1300", name: "Prepaid Expenses" },
    { code: "1310", name: "Prepaid Rent" },
    { code: "1320", name: "Prepaid Insurance" },
    { code: "1400", name: "Other Current Assets" },
    { code: "1410", name: "Short-term Investments" },
    { code: "1420", name: "Loans to Officers" },
    { code: "1500", name: "Property, Plant, and Equipment" },
    { code: "1510", name: "Land" },
    { code: "1520", name: "Buildings" },
    { code: "1530", name: "Equipment" },
    { code: "1540", name: "Furniture and Fixtures" },
    { code: "1600", name: "Accumulated Depreciation" },
    { code: "1610", name: "Accumulated Depreciation - Buildings" },
    { code: "1620", name: "Accumulated Depreciation - Equipment" },
    { code: "1630", name: "Accumulated Depreciation - Furniture and Fixtures" },
    { code: "1700", name: "Other Assets" },
    { code: "1710", name: "Long-term Investments" },
    { code: "1720", name: "Notes Receivable" },
    { code: "1800", name: "Accounts Payable" },
    { code: "1810", name: "Accounts Payable - Trade" },
    { code: "1820", name: "Accounts Payable - Non-Trade" },
    { code: "1900", name: "Accrued Liabilities" },
    { code: "1910", name: "Accrued Payroll" },
    { code: "1920", name: "Accrued Taxes" },
    { code: "1930", name: "Accrued Interest" },
    { code: "2000", name: "Short-term Notes Payable" },
    { code: "2010", name: "Current Portion of Long-term Debt" },
    { code: "2100", name: "Other Current Liabilities" },
    { code: "2110", name: "Short-term Loans" },
    { code: "2120", name: "Customer Deposits" },
    { code: "2130", name: "Sales Tax Payable" },
    { code: "2140", name: "Unearned Revenue" },
    { code: "2200", name: "Long-term Liabilities" },
    { code: "2210", name: "Long-term Loans" },
    { code: "2220", name: "Mortgages Payable" },
    { code: "2230", name: "Bonds Payable" },
    { code: "2300", name: "Owner's Equity" },
    { code: "2310", name: "Owner's Capital" },
    { code: "2320", name: "Owner's Drawings" },
    { code: "2330", name: "Retained Earnings" },
    { code: "2400", name: "Revenue" },
    { code: "2410", name: "Sales" },
    { code: "2420", name: "Interest Income" },
    { code: "2430", name: "Dividend Income" },
    { code: "2500", name: "Cost of Goods Sold" },
    { code: "2510", name: "Beginning Inventory" },
    { code: "2520", name: "Purchases" },
    { code: "2530", name: "Direct Labor" },
    { code: "2540", name: "Overhead" },
    { code: "2550", name: "Ending Inventory" },
    { code: "2600", name: "Operating Expenses" },
    { code: "2610", name: "Rent Expense" },
    { code: "2620", name: "Utilities Expense" },
    { code: "2630", name: "Salaries Expense" },
    { code: "2640", name: "Insurance Expense" },
    { code: "2650", name: "Depreciation Expense" },
    { code: "2660", name: "Advertising Expense" },
    { code: "2670", name: "Travel Expense" },
    { code: "2680", name: "Entertainment Expense" },
    { code: "2690", name: "Miscellaneous Expense" },
    { code: "2700", name: "Other Income" },
    { code: "2710", name: "Gain on Sale of Assets" },
    { code: "2800", name: "Other Expenses" },
    { code: "2810", name: "Loss on Sale of Assets" },
    { code: "2820", name: "Interest Expense" },
    { code: "2830", name: "Bank Fees" },
    { code: "2840", name: "Legal Fees" },
    { code: "2850", name: "Accounting Fees" },
    { code: "2860", name: "Consulting Fees" },
    { code: "2870", name: "Repairs and Maintenance" },
    { code: "2880", name: "Office Supplies" },
    { code: "2890", name: "Advertising Expense" },
    { code: "2900", name: "Utilities Expense" },
    { code: "2910", name: "Rent Expense" },
    { code: "2920", name: "Insurance Expense" },
    { code: "2930", name: "Taxes Expense" },
    { code: "2940", name: "Depreciation Expense" },
    { code: "2950", name: "Amortization Expense" },
    { code: "2960", name: "Travel Expense" },
    { code: "2970", name: "Entertainment Expense" },
    { code: "2980", name: "Education and Training Expense" },
    { code: "2990", name: "Miscellaneous Expense" },
    { code: "3000", name: "Marketing Expense" },
    { code: "3010", name: "Software Expense" },
    { code: "3020", name: "Hardware Expense" },
    { code: "3030", name: "Equipment Rental Expense" },
    { code: "3040", name: "Shipping and Handling Expense" },
    { code: "3050", name: "Commissions Expense" },
    { code: "3060", name: "Utilities Expense" },
    { code: "3070", name: "Office Rent Expense" },
    { code: "3080", name: "Property Tax Expense" },
    { code: "3090", name: "Health Insurance Expense" },
    { code: "3100", name: "Vehicle Expense" },
    { code: "3110", name: "Fuel Expense" },
    { code: "3120", name: "Repairs and Maintenance Expense" },
    { code: "3130", name: "Interest Expense" },
    { code: "3140", name: "Legal Expense" },
    { code: "3150", name: "Accounting Expense" },
    { code: "3160", name: "Consulting Expense" },
    { code: "3170", name: "Training and Education Expense" },
    { code: "3180", name: "Travel Expense" },
    { code: "3190", name: "Entertainment Expense" },
    { code: "3200", name: "Charitable Contributions Expense" },
    { code: "3210", name: "Professional Association Dues Expense" },
    { code: "3220", name: "Subscription Expense" },
    { code: "3230", name: "Bank Fees Expense" },
    { code: "3240", name: "Merchant Account Fees Expense" },
    { code: "3250", name: "Software as a Service (SaaS) Expense" },
    { code: "3260", name: "Office Supplies Expense" },
    { code: "3270", name: "Advertising Expense" },
    { code: "3280", name: "Internet Expense" },
    { code: "3290", name: "Telephone Expense" },
 { code: "3300", name: "Cell Phone Expense" },
 { code: "3310", name: "Postage Expense" },
 { code: "3320", name: "Printing and Stationery Expense" },
 { code: "3330", name: "Website Expense" },
 { code: "3340", name: "Equipment Lease Expense" },
 { code: "3350", name: "Office Equipment Expense" },
 { code: "3360", name: "Software License Expense" },
 { code: "3370", name: "Employee Training and Development Expense" },
 { code: "3380", name: "Employee Benefits Expense" },
 { code: "3390", name: "Employee Bonus Expense" },
 { code: "3400", name: "Employee Salary Expense" },
 { code: "3410", name: "Contract Labor Expense" },
 { code: "3420", name: "Freight Expense" },
 { code: "3430", name: "Storage Expense" },
 { code: "3440", name: "Equipment Repair Expense" },
 { code: "3450", name: "Building Maintenance Expense" },
 { code: "3460", name: "Security Expense" },
 { code: "3470", name: "Insurance Expense" },
 { code: "3490", name: "Interest Expense" },
 { code: "3500", name: "Taxes Expense" },
 { code: "3510", name: "Depreciation Expense" },
 { code: "3520", name: "Amortization Expense" },
 { code: "3530", name: "Other Expense" },
 { code: "4000", name: "Sales Revenue" },
 { code: "4010", name: "Service Revenue" },
 { code: "4020", name: "Interest Income" },
 { code: "4030", name: "Dividend Income" },
 { code: "4040", name: "Rental Income" },
 { code: "4050", name: "Royalty Income" },
 { code: "4060", name: "Commission Income" },
 { code: "4070", name: "Gain on Sale of Assets" },
 { code: "4080", name: "Other Income" },


    // Add more account codes as needed
];

// Function to populate account codes in the select element
document.addEventListener('DOMContentLoaded', (event) => {
    populateAccountCodes();
    loadSavedData();
});

function populateAccountCodes() {
    const accountCodeSelect = document.getElementById('accountCode');
    
    // Clear any existing options
    accountCodeSelect.innerHTML = '';

    // Add a default option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select Account Code';
    accountCodeSelect.appendChild(defaultOption);

    // Add options from the accountCodes array
    accountCodes.forEach(account => {
        const option = document.createElement('option');
        option.value = account.code;
        option.textContent = `${account.code} - ${account.name}`;
        accountCodeSelect.appendChild(option);
    });
}

// Handle form submission
document.getElementById('transactionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const accountCode = document.getElementById('accountCode').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;

    // Save the inputted values in local storage
    saveTransaction(accountCode, amount, type);

    let accountRow = document.querySelector(`tr[data-account-code="${accountCode}"]`);

    if (!accountRow) {
        // Create a new row if account does not exist
        accountRow = createNewRow(accountCode);
        document.querySelector('#chartOfAccountsTable tbody').appendChild(accountRow);
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

    // Update the total sums
    updateTotals();
});

function createNewRow(accountCode) {
    const row = document.createElement('tr');
    row.setAttribute('data-account-code', accountCode);
    row.innerHTML = `
        <td>${accountCode}</td>
        <td>New Account</td>
        <td>Category</td>
        <td class="debit">0.00</td>
        <td class="credit">0.00</td>
        <td class="balance">0.00</td>
        <td class="last-date"></td>
        <button type="reset" onclick="resetData()">Reset Data</button>
    `;
    return row;
}

function saveTransaction(accountCode, amount, type) {
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    transactions.push({ accountCode, amount, type, date: new Date().toISOString() });
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

function resetData(accountCode) {
    let accountRow = document.querySelector(`tr[data-account-code="${accountCode}"]`);
    if (accountRow) {
        const debitCell = accountRow.querySelector('.debit');
        const creditCell = accountRow.querySelector('.credit');
        const balanceCell = accountRow.querySelector('.balance');
        const dateCell = accountRow.querySelector('.last-date');

        debitCell.textContent = '0.00';
        creditCell.textContent = '0.00';
        balanceCell.textContent = '0.00';
        dateCell.textContent = '';
    }
    updateTotals();
}

function loadSavedData() {
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    transactions.forEach(transaction => {
        let accountRow = document.querySelector(`tr[data-account-code="${transaction.accountCode}"]`);
        if (!accountRow) {
            // Create a new row if account does not exist
            accountRow = createNewRow(transaction.accountCode);
            document.querySelector('#chartOfAccountsTable tbody').appendChild(accountRow);
        }

        const debitCell = accountRow.querySelector('.debit');
        const creditCell = accountRow.querySelector('.credit');
        const balanceCell = accountRow.querySelector('.balance');
        const dateCell = accountRow.querySelector('.last-date');

        let debit = parseFloat(debitCell.textContent);
        let credit = parseFloat(creditCell.textContent);
        let balance = parseFloat(balanceCell.textContent);
        const amount = parseFloat(transaction.amount);

        if (transaction.type === 'debit') {
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
        } else if (transaction.type === 'credit') {
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

        const formattedDate = new Date(transaction.date).toLocaleDateString() + ' ' + new Date(transaction.date).toLocaleTimeString();
        dateCell.textContent = formattedDate;
    });

    // Update the total sums
    updateTotals();
}

function updateTotals() {
    const debitCells = document.querySelectorAll('.debit');
    const creditCells = document.querySelectorAll('.credit');

    let totalDebit = 0;
    let totalCredit = 0;

    debitCells.forEach(cell => {
        totalDebit += parseFloat(cell.textContent);
    });

    creditCells.forEach(cell => {
        totalCredit += parseFloat(cell.textContent);
    });

    document.getElementById('totalDebit').textContent = totalDebit.toFixed(2);
    document.getElementById('totalCredit').textContent = totalCredit.toFixed(2);
}

// Load saved data when the page loads
window.onload = loadSavedData;

