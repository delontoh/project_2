var React = require("react");
var ExpenseLayout = require('./layouts/ExpenseLayout');

class newexpense extends React.Component {
  render() {
    return (
      <ExpenseLayout>
        <div className = 'newExpenseContainer'>
          <h1>New Expense</h1><br /><br />
          <form className="expense-form" method="POST" action="/user/expense/post">
            <div className="expense-attribute">
              Item name: <input name="exp_item" type="text" />
            </div>

            <div className="expense-attribute">
              Amount: $ <input name="exp_amt" type="number" />
            </div>

            <input name= "create" type="submit" value="Create" />
          </form>
        </div>
      </ExpenseLayout>
    );
  }
}

module.exports = newexpense;