import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = ({ id, name, cost }) => {
    const { dispatch, currency } = useContext(AppContext);

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
            <td>{currency}{cost}</td>
            <td>
                <button className="btn btn-primary btn-sm" onClick={increaseAllocation} style={{ backgroundColor: 'green', border: 'green' }}>
                    +
                </button>
            </td>
            <td>
                <button className="btn btn-primary btn-sm" onClick={handleDeleteExpense} style={{ cursor: 'pointer', backgroundColor: 'red', border: 'red' }}>
                    -
                </button>
            </td>
        </tr>
    );
};

export default ExpenseItem;
