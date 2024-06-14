import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [error, setError] = useState('');

    const handleBudgetChange = (event) => {
        const value = event.target.value;
        if (value > 20000) {
            setError('Budget cannot exceed 20000');
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

    const changeCurrency = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                type="number"
                step="10"
                value={newBudget}
                onChange={handleBudgetChange}
                onBlur={updateBudget}
            />
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <div className="input-group-prepend" style={{ marginTop: '1rem' }}>
                <label className="input-group-text" htmlFor="currencySelect">Currency</label>
                <select
                    className="custom-select"
                    id="currencySelect"
                    value={currency}
                    onChange={changeCurrency}
                >
                    <option value="£">£ Pound</option>
                    <option value="$">$ Dollar</option>
                    <option value="€">€ Euro</option>
                    <option value="₹">₹ Rupee</option>
                </select>
            </div>
        </div>
    );
};

export default Budget;
