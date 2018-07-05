var React = require("react");

class editexpense extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <h1>Edit Expense</h1>
          <form className="expense-form" method="POST" action={"/user/expense/edit" + "?_method=PUT"}>
            <div className="expense-attribute">
              Item name: <input name="exp_item" type="text" defaultValue={this.props.editExpense.exp_item} />
            </div>
            <div className="expense-attribute">
              Amount: $<input name="exp_amt" type="text" defaultValue={this.props.editExpense.exp_amt} />
            </div>

            <input name="edit" type="submit" value= 'Save' />
            <input name="delete" type="submit" value='Delete' formAction={"user/expense/delete" + "?_method=DELETE"} />

          </form>
        </body>
      </html>
    );
  }
}

module.exports = editexpense;
