
const hideCalendar = function() {
	if(datePart == undefined) {
		response.redirect('/user/expense/new');
	}
};

hideCalendar();

var url = '/user/expense/:month/edit' ;

const responseHandler = function() {
	console.log("response text", this.responseText)
	var response = JSON.parse(this.responseText)
	console.log(response);
};

