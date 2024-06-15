import React from 'react'
import s from "./Transactions.module.css"

const Transactions = ({ transactions }) => {
  console.log(transactions);
  return (
    <div>
      <table>
        <thead className={s.head}>
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
