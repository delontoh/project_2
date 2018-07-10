var React = require("react");
var ExpenseLayout = require('./expenseLayout');

class ListDetails extends React.Component {
  render() {

    var datePart = this.props.getExpense[0].date_part;
    var str = datePart.toString();  // convert date_part to string to pass through form action
    var toEditPage = '/user/expense/' + str + '/edit';

    return (
     <ExpenseLayout>
      <body>
       <div className= 'display container'>

        <h1>Expense for Month: {this.props.getExpense[0].date_part}</h1>

        <div className= 'row'>
         <div className= 'col-4'>
          <button type= 'button' className= 'btn btn-success btn-circle btn-lg'><a href='/user/expense/new'>+</a></button>
         </div>
         <div className= 'col-4'>   
          <button type= 'button' className= 'btn btn-danger btn-circle btn-md'><a href= {toEditPage}>Edit/Delete</a></button>
         </div>
         <div className= 'col-4'> 
          <form name= 'logout' className= 'logout-form' method='POST' action= {'/user/logout?_method=DELETE'}>
            <input type= 'submit' name= 'submit' className= 'delete-btn' value= 'Logout'/>
          </form>
         </div>
        </div>

{/*        <ul>
          <li className= 'list-title'>
            |Date|
            |Item|
            |Amount|
          </li>
        </ul>*/}
{/*
        <ul>
          {this.props.getExpense.map( function(currentexpense) {
            return (
                <li className= 'list-container' key={currentexpense.id}>
                  {currentexpense.to_char}|
                  |{currentexpense.exp_item}|
                  ${currentexpense.exp_amt}
                </li>
              )
          })}
        </ul>*/} 

        <table className= 'table table-hover table-striped table-dark'>
          <thead>
            <tr>
              <th scope='col'>Date</th>
              <th scope='col'>Item Name</th>
              <th scope='col'>Amount($)</th>
            </tr>
          </thead>
          {this.props.getExpense.map( function(currentexpense) {
            return(
              <tbody key={currentexpense.id}>
                <tr>
                  <td>{currentexpense.to_char}</td>
                  <td>{currentexpense.exp_item}</td>
                  <td>${currentexpense.exp_amt}</td>
                </tr>
              </tbody> 
            )
          })} 
        </table>






       </div>   {/*end of display container div*/}      
       <footer className= 'version'>Version 1.0</footer>
      </body>
     </ExpenseLayout>
    )
  };
};


module.exports = ListDetails;
