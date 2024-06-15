import React from 'react'
import s from "./Transactions.module.css"

const Transactions = ({ transactions }) => {
  console.log(transactions);
  return (
    <div>
      <table>
        <thead className={s.head}>
          <tr className={s.tr}>
            <th className={s.titleTable}>Type</th>
            <th className={s.titleTable}>Amount</th>
            <th className={s.titleTable}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transactions) => {
      return (
          <tr className={s.trbody}  id={transactions.id}>
            <td className={s.typeTable}>{transactions.type}</td>
            <td className={s.textTable}>{transactions.amount}</td>
            <td className={s.textTable}>{transactions.currency}</td>
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
