var React = require("react");
var ExpenseLayout = require('./layouts/ExpenseLayout');

class ListDetails extends React.Component {
  render() {
    return (
      <div className= 'expenseListContainer'>
        <p className="expense-attribute">Date: {this.props.getExpense.exp_date}</p>
        <p className="expense-attribute">Item name: {this.props.getExpense.exp_item}</p>
        <p className="expense-attribute">Amount: $ {this.props.getExpense.exp_amt}</p>
      </div>
    );
  }
}

class expenselist extends React.Component {
  render() {
    const listDetailsComponent = this.props.getExpense.map(currentexpense => {
      return <ListDetails key={currentexpense.id} />
    });

    return (
      <ExpenseLayout>
       <h1>Month: {this.props.getExpense.date_part}</h1>
       <div className= 'headerDiv'>
        <form className= 'newexpense' method= 'GET' action= '/user/expense/:month/new'>
          <input name= 'create' type= 'submit' value='New'/>
        </form>
        <form className= 'editexpense' method= 'GET' action= '/user/expense/:month/edit'>
          <input className= 'edit' type='submit' value= 'Edit'/>
        </form>
        <form className= 'deleteall' method= 'GET' action= '/user/expense/:month/delete'>
          <input className= 'delete' type='submit' value= 'Delete'/>
        </form>
       </div>

       <div className='expenseContainer'>
        {listDetailsComponent}
       </div>
      </ExpenseLayout>
    )
  }
}

module.exports = expenselist;
