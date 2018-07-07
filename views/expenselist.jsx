var React = require("react");
var ExpenseLayout = require('./layouts/ExpenseLayout');

class expenselist extends React.Component {
  render() {
    return (
      <ExpenseLayout>        
        <div className= 'expenseListContainer'>
          <ul className="expense-list">
            <li className="expense-attribute">
              Date: {this.props.getExpense.exp_date}
            </li>
            <li className="expense-attribute">
              Item name: {this.props.getExpense.exp_item}
            </li>
            <li className="expense-attribute">
              Amount: $ {this.props.getExpense.exp_amt}
            </li>
          </ul>
        </div>
      </ExpenseLayout>
    );
  }
}

module.exports = expenselist;
