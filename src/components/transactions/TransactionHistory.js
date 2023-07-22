import React from 'react';
import PropTypes from 'prop-types';

function TransactionHistory({transactions}){
    return(
        <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
  {transactions.map(({id,type,amount,currency}) => (

    <tr id={id}>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
  ))}
   
  </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
    transactions:PropTypes.arrayOf(
        PropTypes.exact({
            id:PropTypes.string.isRequired,
            type:PropTypes.string.isRequired,
            amount:PropTypes.string.isRequired,
            currency:PropTypes.string.isRequired,
        })
    )
}

export default TransactionHistory;