import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import TextsmsIcon from '@material-ui/icons/Textsms';

export const Balance = () =>{
    const {transactions} = useContext(GlobalContext);

    const amounts= transactions.map(transaction => transaction.amount);
    
    const total = amounts.reduce( (acc, item) => (acc = acc + item),0).toFixed(2);
    
    return(
        <>
            <h4>Your  Balance <TextsmsIcon className="sms" onClick={()=>(alert("Hello, My name is Ameer Hamza.this is my first project of bootcamp of PIAIC. Thank you for Visiting. "))}></TextsmsIcon></h4>
            <h1>Rs. {total}</h1>
        </>
    )
}