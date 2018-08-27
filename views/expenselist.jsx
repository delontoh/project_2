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

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
         <div className = 'container'>
            <a className="navbar-brand" href="/calendar">SaveLah!</a>
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/calendar">Calendar<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className='nav-link' href='/user/expense/new'>+New</a>
              </li>
              <li className="nav-item">
                <a className='nav-link' href= {toEditPage}>Edit/Delete</a>
              </li>
              <li className="nav-item">
                <form name= 'logout' className= 'logout-form nav-link nav-item' method='POST' action= {'/user/logout?_method=DELETE'}>
                    <input type= 'submit' name= 'submit' className= 'logout-btn' value= 'Logout'/>
                </form>
              </li>
            </ul>
          </div>
        </nav>        
       
       <div className= 'display container'>
       <h1>Expense for Month: {this.props.getExpense[0].date_part}</h1>
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
                <tr key={currentexpense.id}>
                  <td className= 'output'>{currentexpense.to_char}</td>
                  <td className= 'output'>{currentexpense.exp_item}</td>
                  <td className= 'output'>${currentexpense.exp_amt}</td>
                </tr>
              </tbody> 
            )
          })} 
        </table>
       </div>   {/*end of display container div*/}  

       <footer className= 'version'>Version 1.0</footer>
      </body>
      <script src='/ajax.js'></script>
     </ExpenseLayout>
    )
  };
};


module.exports = ListDetails;
