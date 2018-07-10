  class expenselist extends React.Component { 
//   render() {
//     const listDetailsComponent = this.props.getExpense.map(currentexpense => {
//       return <ListDetails key={currentexpense.id} />
//     });

//     return (
//       <ExpenseLayout>
//         <body>
//           <h1>Month: {this.props.getExpense.date_part}</h1>
//           <div className= 'headerDiv'>
//             <form className= 'newexpense' method= 'GET' action= {"/user/expense/new"}>
//               <input className= 'submit' type= 'submit' value='New'/>
//             </form>
//             <form className= 'editexpense' method= 'GET' action= {"/user/expense/" + this.props.getExpense.date_part + "/edit"}>
//               <input className= 'submit' type='submit' value= 'Edit'/>
//             </form>
//             <form className= 'deleteall' method= 'GET' action= {"/user/expense/" + this.props.getExpense.date_part + "/delete"}>
//               <input className= 'submit' type='submit' value= 'Delete'/>
//             </form>
//           </div>

//           <div className='expenseContainer'>
//             {listDetailsComponent}
//           </div>
//         </body>
//       </ExpenseLayout>
//     )
//   };
// };



class ListDetails extends React.Component {
  render() {
    return (
        <body>
          <ul>
            {this.props.getExpense.map( function(c) {
              return (
                  <li key={c.id}>
                    {c.to_char} |
                    {c.exp_amt} | 
                    {c.exp_item}|
                  </li>
                )
            })}
          </ul>
        </body>
    );
  }
}

    return (
      <ExpenseLayout>
        <body>
          <h1>Expense for Month: {this.props.getExpense[0].date_part}</h1>
          <div className= 'formDiv'>
            <form className= "expense-form" name= 'newexpense' method= 'GET' action= {"/user/expense/new"}>
              <input className= 'submit' type= 'submit' value='New'/>
            </form>
            <form className= "expense-form" name= 'editexpense' method= 'GET' action= {"/user/expense/" + str + "/edit"}>
              <input className= 'submit' type='submit' value= 'Edit'/>
            </form>
            <form className= "expense-form" name= 'deleteall' method= 'GET' action= {"/user/expense/" + str + "/delete"}>
              <input className= 'submit' type='submit' value= 'Delete'/>
            </form>
          </div>

          <div className='expenseDiv'>
            {listDetailsComponent}
          </div>
        </body>
      </ExpenseLayout>
    )
  };
};