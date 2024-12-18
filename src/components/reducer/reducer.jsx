import React, { useState, useReducer } from 'react';

// Reducer function to handle state updates
const transactionsReducer = (state, action) => {
  if (action.type === 'add') {
    return [...state, action.payload];
  }
  return state;
};

// Custom hook to manage transactions
const useTransaction = (initialTransactions) => {
  const [transactions, dispatch] = useReducer(transactionsReducer, initialTransactions);

  const addTransaction = (t) => dispatch({ type: "add", payload: t });

  return { transactions, addTransaction };
};

// Initial transactions data
const initialTransactions = [
  { id: 3, date: '2020-03-16', label: 'Lunch' },
  { id: 2, date: '2020-05-15', label: 'Sleep' },
  { id: 1, date: '2020-09-22', label: 'Sing' }
];

// Main component
export default function NewReducer2() {
  // Use custom hook to manage transactions
  const { transactions, addTransaction } = useTransaction(initialTransactions);

  return (
    <div>
    <h2>UseReducer</h2>
    <Calendar transactions={transactions} addTransaction={addTransaction} />
    </div>
  );
}

// Calendar component to display and manage transactions
function Calendar({ transactions, addTransaction }) {
  const [newTransaction, setNewTransaction] = useState({ id: '', date: '', label: '' });

  const handleAddTransaction = () => {
    if (newTransaction.date && newTransaction.label) {
      addTransaction(newTransaction);
      setNewTransaction({ id: '', date: '', label: '' }); // Reset input fields after adding
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Date</th>
            <th scope="col">Label</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(transactions) && transactions.map((t) => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.date}</td>
              <td>{t.label}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div>
        <label htmlFor="new-transaction-date">Date</label>
        <input
          id="new-transaction-date"
          type="date"
          value={newTransaction.date}
          onChange={(e) => setNewTransaction({ ...newTransaction, date: e.target.value })}
        />

        <label htmlFor="new-transaction-label">Label</label>
        <input
          id="new-transaction-label"
          type="text"
          value={newTransaction.label}
          onChange={(e) => setNewTransaction({ ...newTransaction, label: e.target.value })}
        />

        <button onClick={handleAddTransaction}>Add</button>
      </div>
    </div>
  );
}