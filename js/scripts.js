//DestinationLog business logic
function DestinationLog() {
  this.destinations = {};
  this.currentId = 0;
}
DestinationLog.prototype.addDestination = function(destination){
  destination.id = this.assignId();
  this.destinations[destination.id] = destination;
};

DestinationLog.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

//Destination Business Logic
function Destination(location, landmark, notes) {
  this.location = location;
  this.landmark = landmark;
  this.notes = notes;
}



Destination.prototype.info = function() {
  return this.location + " " + this.landmark
}



//UI Logic

$(document).ready(function(){
  $("form#location").submit(function(event){
    event.preventDefault();
    let log1 = new DestinationLog();
    const location = $("#text-passage-location").val();
    const landmark = $("#text-passage-landmark").val();
    const notes = $("#text-passage-notes").val();
    let place = new Destination(location, landmark, notes)
    log1.addDestination(place);
    console.log(log1)
    $("#output").text(place.info());

  });
});