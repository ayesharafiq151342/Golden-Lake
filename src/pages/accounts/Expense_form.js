import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

function ExpenseForm() {
    const { id } = useParams();
    const location = useLocation();
    const entry = location.state?.entry || {}; // Retrieve the passed entry

    return (
        <div>
            <h1>Edit Expense Entry</h1>
            <form>
                <label>
                    Transaction Code:
                    <input type="text" value={entry.transactionCode} readOnly />
                </label>
                <label>
                    Transaction Date:
                    <input type="text" value={entry.transactionDate} readOnly />
                </label>
                <label>
                    Memo:
                    <input type="text" value={entry.memo} />
                </label>
                <label>
                    Reference No:
                    <input type="text" value={entry.RefreneceNo} />
                </label>
                <label>
                    Status:
                    <input type="text" value={entry.status} readOnly />
                </label>
            </form>
        </div>
    );
}

export default ExpenseForm;
