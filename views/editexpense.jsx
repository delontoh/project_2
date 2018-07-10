var React = require("react");
var ExpenseLayout = require('./ExpenseLayout');

class editexpense extends React.Component {
  render() {

    var datePart= this.props.editExpense[0].date_part;
    var str= datePart.toString();

    var formPathEdit= "/user/expense/" + str + "/put?_method=PUT";
    var formPathDelete = "/user/expense/" + str + "/delete?_method=DELETE";

    return (
      <ExpenseLayout>

        <div className= 'display-container'>
          <h1>Edit Expense</h1><br/><br/>

          {this.props.editExpense.map(function(currentexpense) {
            return(
              <div className= 'form-container' key= {currentexpense.id}>
                <form className="expense-form" name="editexpense" method="POST" action= {formPathEdit}>
                  <input name='id' type='hidden' defaultValue={currentexpense.id} />
                  Date: <input name="exp_date" type="text" defaultValue={currentexpense.to_char} required/>
                  Item name: <input name="exp_item" type="text" defaultValue={currentexpense.exp_item} required/>
                  Amount: $ <input name="exp_amt" type="text" defaultValue={currentexpense.exp_amt} required/><br/><br/>
 
                  <input className= "submit-1" name="edit" type="submit" value='Save' />
                  <input className= "submit-2" name="delete" type="submit" value='Delete' formAction={formPathDelete} />
                </form><br/>
              </div>
            )
          })}
        </div>

      </ExpenseLayout>
    );
  }
}

module.exports = editexpense;
