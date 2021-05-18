//arrays
ticketsFor = [];
console.log("Hello World");
//adding to ticketsFor array
var addPerson = function (namE, agE) {
  ticketsFor.push({ name: namE, age: agE });
  ticketsFor.sort(function (a, b) {
    return b.age - a.age;
  });
};

var onAddPersonClick = function () {
  var newName = document.getElementById("newNameInput").value;
  var newAge = document.getElementById("newAgeInput").value;
  if (
    window.confirm(
      "Are you Sure you want to submit a ticket for this person?"
    ) === true
  ) {
    addPerson(newName, newAge);
  }
};

var onClick = function () {
  showNames();
};
var showNames = function () {
  var allNamesDiv = document.getElementById("allNames");
  // allNamesDiv.innerHTML = "<p>"+JSON.stringify(ticketsFor)+"</p>"
  // var allticketsForArray = ""
  // for(i=0; i<ticketsFor.length; i++){
  //     allticketsForArray+= getTickets(ticketsFor[i])
  // }
  // ticketsFor.forEach(function(ticketHolder){
  //     allticketsForArray += getTickets(ticketHolder)
  // })
  var allticketsForArray = ticketsFor.map(getTickets).join("");
  allNamesDiv.innerHTML = allticketsForArray;
};

var getTickets = function (ticketHolder) {
  return "<p>" + ticketHolder.name + "  " + ticketHolder.age + "</p>";
};

var onSubmitTicketClick = function () {
  if (ticketsFor.length > 0) {
    changePage();
  }
};

// a function that onClick will take me to the "submitted" page
var changePage = function () {
  window.location.replace("./submitted_tickets.html");
};
