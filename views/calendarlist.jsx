var React = require("react");
var CalendarLayout = require('./layouts/calendarLayout');

class calendarlist extends React.Component {
  render() {
    return (
      <CalendarLayout>
        <div className= 'calendarContainer'>
          <h1>Calendar</h1><br/><br/>
          <input name="Jan" type="submit" value="Jan" action= {"user/expense/1"} />
          <input name="Feb" type="submit" value="Feb" formAction= {"user/expense/2"} />
          <input name="Mar" type="submit" value="Mar" formAction= {"user/expense/3"} /><br/><br/>
          <input name="Apr" type="submit" value="Apr" formAction= {"user/expense/4"} />
          <input name="May" type="submit" value="May" formAction= {"user/expense/5"} />
          <input name="Jun" type="submit" value="Jun" formAction= {"user/expense/6"} /><br/><br/>
          <input name="Jul" type="submit" value="Jul" formAction= {"user/expense/7"} />
          <input name="Aug" type="submit" value="Aug" formAction= {"user/expense/8"} />
          <input name="Sep" type="submit" value="Sep" formAction= {"user/expense/9"} /><br/><br/>
          <input name="Oct" type="submit" value="Oct" formAction= {"user/expense/10"} />
          <input name="Nov" type="submit" value="Nov" formAction= {"user/expense/11"} />
          <input name="Dec" type="submit" value="Dec" formAction= {"user/expense/12"} />
       </div>
      </CalendarLayout>
    );
  }
}

module.exports = calendarlist;
