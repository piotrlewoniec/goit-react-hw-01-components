import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => (
  <table className={css.transaction_history}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <tr key={item.id}>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.array,
};

// 4 - Historia transakcji
// Należy utworzyć komponent historii transakcji na koncie w banku internetowym.
// Dane do listy są dostępne w formacie JSON w pliku transactions.json. To tablica obiektów, na której każdy obiekt opisuje jedną transakcję z następującymi właściwościami:
// id — unikalny identyfikator transakcji
// type — typ transakcji
// amount - kwota transakcji
// currency - rodzaj waluty

// Opis komponentu <TransactionHistory>
// Należy stworzyć komponent <TransactionHistory> przyjmujący jeden props items – tablicę obiektów transakcji z transactions.json. Komponent tworzy układ tablicy. Każda transakcja to łańcuch tablicy. W przykładzie pokazany został układ dwóch transakcji:

// <table class="transaction-history">
//   <thead>
//     <tr>
//       <th>Type</th>
//       <th>Amount</th>
//       <th>Currency</th>
//     </tr>
//   </thead>

//   <tbody>
//     <tr>
//       <td>Invoice</td>
//       <td>125</td>
//       <td>USD</td>
//     </tr>
//     <tr>
//       <td>Withdrawal</td>
//       <td>85</td>
//       <td>USD</td>
//     </tr>
//   </tbody>
// </table>

// Przykład wykorzystania

// import transactions from 'path/to/transactions.json';
// <TransactionHistory items={transactions} />;
