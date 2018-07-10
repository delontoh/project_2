var React = require("react");
var CalendarLayout = require('./calendarLayout');

class calendarlist extends React.Component {
  render() {
    return (
      <CalendarLayout>
        <div className= 'container-fluid'>
          <body>
            <h1>Calendar</h1><br/><br/>

            <div className= 'actionButtonContainer'>

              <div className= 'row'>
                <div className= 'col-md-4'>
                  <form className= 'actionForm' method= 'GET' action= {"user/expense/1"}>
                    <input className= 'btn' type="submit" value="Jan"/>
                  </form>
                </div>
                <div className= 'col-md-4'>
                  <form className= 'actionForm' method= 'GET' action= {"user/expense/2"}>
                    <input className="btn" type="submit" value="Feb"/>
                  </form>
                </div>
                <div className= 'col-md-4'>
                  <form className= 'actionForm' method= 'GET' action= {"user/expense/3"}>
                    <input className="btn" type="submit" value="Mar"/>
                  </form>
                </div>
              </div><br/>

              <div className= 'row'>
                <div className= 'col-md-4'>
                  <form className= 'actionForm' method= 'GET' action= {"user/expense/4"}>
                    <input className="btn" type="submit" value="Apr"/>
                  </form>
                </div>
                <div className= 'col-md-4'>
                  <form className= 'actionForm' method= 'GET' action= {"user/expense/5"}>
                    <input className="btn" type="submit" value="May"/>
                  </form>
                </div>
                <div className= 'col-md-4'>
                  <form className= 'actionForm' method= 'GET' action= {"user/expense/6"}>
                    <input className="btn" type="submit" value="Jun"/>
                  </form>
                </div>
              </div><br/>

              <div className= 'row'>
                <div className= 'col-md-4'>
                  <form className= 'actionForm' method= 'GET' action= {"user/expense/7"}>
                    <input className="btn" type="submit" value="Jul"/>
                  </form>
                </div>
                <div className= 'col-md-4'>
                  <form className= 'actionForm' method= 'GET' action= {"user/expense/8"}>
                    <input className="btn" type="submit" value="Aug"/>
                  </form>
                </div>
                <div className= 'col-md-4'>
                  <form className= 'actionForm' method= 'GET' action= {"user/expense/9"}>
                    <input className="btn" type="submit" value="Sep"/>
                  </form>
                </div>
              </div><br/>

              <div className= 'row'>
                <div className= 'col-md-4'>
                  <form className= 'actionForm' method= 'GET' action= {"user/expense/10"}>
                    <input className="btn" type="submit" value="Oct"/>
                  </form>
                </div>
                <div className= 'col-md-4'>
                  <form className= 'actionForm' method= 'GET' action= {"user/expense/11"}>
                    <input className="btn" type="submit" value="Nov"/>
                  </form>
                </div>
                <div className= 'col-md-4'>
                  <form className= 'actionForm' method= 'GET' action= {"user/expense/12"}>
                    <input className="btn" type="submit" value="Dec"/>
                  </form>
                </div>
              </div>
            </div>
            <footer className= 'version'>Version 1.0</footer>
          </body>
        </div>
      </CalendarLayout>
    );
  }
}

module.exports = calendarlist;
