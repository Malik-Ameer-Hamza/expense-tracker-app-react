import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';

export const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-':'+';
    return (
        <Tooltip title="History"><li className={transaction.amount < 0 ? 'minus':'plus'}>
            {transaction.text}<span>{sign}Rs. {Math.abs(transaction.amount)}<button onClick={() => deleteTransaction(transaction.id)} className="delete-btn"><DeleteIcon></DeleteIcon></button></span>
        </li>
        </Tooltip>
    )
}