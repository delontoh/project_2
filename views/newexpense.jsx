var React = require("react");
var ExpenseLayout = require('./ExpenseLayout');

class newexpense extends React.Component {
  render() {
    return (
      <ExpenseLayout>
       <div className= 'display-container'>
        <h1>New Expense</h1><br /><br />

        <div className = 'formDiv'>
          <form className = "expense-form" name="newsexpense" method="POST" action="/user/expense/post">
            <div className="expense-attribute">
              Item name : <input name="exp_item" type="text" required/>
            </div><br/>
            <div className="expense-attribute">
              Amount : $ <input name="exp_amt" type="text" required/>
            </div><br/>
            <input name= "submit" type="submit" value="Create" />
          </form>
        </div>
       </div>
      </ExpenseLayout>
    );
  }
}

module.exports = newexpense;