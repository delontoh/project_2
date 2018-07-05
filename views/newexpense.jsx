var React = require("react");

class newexpense extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <h1>New Expense</h1><br /><br />
          <form className="expense-form" method="POST" action="/user/expense/post">

            <div className="expense-attribute">
              Item name: <input name="exp_item" type="text" />
            </div>

            <div className="pokemon-attribute">
              Amount: $<input name="exp_amt" type="text" />
            </div>

            <input type="submit" value="Save" />

          </form>
        </body>
      </html>
    );
  }
}

module.exports = newexpense;