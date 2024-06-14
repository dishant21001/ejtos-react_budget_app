import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = ({ id, name, cost }) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: id,
        });
    };

    const increaseAllocation = () => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    };

    return (
        <tr>
            <td>{name}</td>
            <td>£{cost}</td>
            <td>
                <button className="btn btn-primary btn-sm" onClick={increaseAllocation}>
                    +10
                </button>
            </td>
            <td>
                <TiDelete size='1.5em' onClick={handleDeleteExpense} style={{ cursor: 'pointer' }} />
            </td>
        </tr>
    );
};

export default ExpenseItem;
