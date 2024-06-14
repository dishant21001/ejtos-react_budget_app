import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    // Extract expenses from context
    const { expenses } = useContext(AppContext);
    
    // Calculate the total expenses
    const totalExpenses = expenses.reduce((total, item) => {
        return total + item.cost;
    }, 0);

    return (
        <div className='alert alert-primary'>
            <span>Spent so far: £{totalExpenses}</span>
        </div>
    );
};

export default ExpenseTotal;
