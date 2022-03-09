 import React, {useState} from 'react'
 import './ExpenseForm.css'


const ExpenseForm = (props)=>{
     const [enteredTitle,setTitle] = useState('')
     const [enteredAmount,setAmount] = useState('')
     const [enteredDate,setDate] = useState('')


    const titleChangeHandler=(e)=>{
            setTitle(e.target.value)
       
    }
    const amountChangeHandler=(e)=>{
        setAmount(e.target.value)
    }
    const dateChangeHandler=(e)=>{
        setDate(e.target.value)
    }

    const onSubmitHandler=(e)=>{
        e.preventDefault();
        const expenseData ={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
       setAmount('');
       setDate('');
       setTitle('');
       props.onSaveExpenseData(expenseData);
    }
  
    return(
    <form onSubmit={onSubmitHandler}>
        <div className="new-expense__controls">
             <div className="new-expense__control">
                 <label>Title</label>
                 <input type="text" 
                 onChange={titleChangeHandler}
                  value={enteredTitle}
                  />
                 </div>

                 <div className="new-expense__control">
                 <label>Amount</label>
                 <input type="number" onChange={amountChangeHandler}
                  value={enteredAmount}
                 />
                 </div>
                 <div className="new-expense__control">
                 <label>Date</label>
                 <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}
                  value={enteredDate}
                 />
                 </div>
                 <div className='new-expense__actions'>
                      <button type="submit">Add Expense</button>
                     </div>
            </div> 
    </form>
    )
}

export default ExpenseForm