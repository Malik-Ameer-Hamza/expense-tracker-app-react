import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Tooltip from '@material-ui/core/Tooltip';


export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    
    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id : Math.floor(Math.random() * 1000000000),
            text,
            amount : +amount
        }
        addTransaction(newTransaction);
    }
    return(
        <>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <Tooltip title="Enter Description"><input type="text" required value={text} onChange={(e)=>{setText(e.target.value)}} placeholder="Enter text"/></Tooltip>
            </div>
            <div className="form-control">
                <label htmlFor="text">Amount<br />(negative - expense, positive - income)</label>
                <Tooltip title="Enter Amount expenses in negative and income in positive"><input type="number" value={amount} required onChange={(e)=>{setAmount(e.target.value)}} placeholder="Enter amount"/></Tooltip>
            </div>
            <button className="btn">Add Transaction</button>
        </form>
        </>
    )
}