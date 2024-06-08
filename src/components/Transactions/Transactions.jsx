import React from 'react'

const Transactions = ({ transactions }) => {
  console.log(transactions);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transactions) => {
      return (
          <tr id={transactions.id}>
            <td>{transactions.type}</td>
            <td>{transactions.amount}</td>
            <td>{transactions.currency}</td>
          </tr>
          )
    })
  }
        </tbody>
      </table>
    </div>
  )
}

export default Transactions
