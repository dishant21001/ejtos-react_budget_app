import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [error, setError] = useState('');

    const handleBudgetChange = (event) => {
        const value = event.target.value;
        if (value > 20000) {
            setError('Budget cannot exceed £20000');
        } else {
            setError('');
            setNewBudget(value);
        }
    };

    const updateBudget = () => {
        if (newBudget <= 20000) {
            dispatch({
                type: 'SET_BUDGET',
                payload: parseInt(newBudget, 10),
            });
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input
                type="number"
                step="10"
                value={newBudget}
                onChange={handleBudgetChange}
                onBlur={updateBudget}
            />
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
};

export default Budget;
