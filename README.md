#### Description: DestinationLog()
>"It needs to be able to store information about a place the user has been within an object."

Test: "It should be able to store input from the user."
Code: DestinationLog()
DestinationLog.location["Oregon"];
Expected Output: {location: "Oregon"};

#### Description: prototype.addDestination()
>"It should be able to receive new destination info from the user and store them in the DestinationLog()."

Test: "It should take user inputted data and store it"
Code: DestinationLog1.addDestination("Seattle"); 
Expected Output : {Destination: "Seattle};

#### Description: Destination()
>"It needs to be able to store information about a place the user has been."

Test: "It should be able to store input from the user as a destination."
Code: Destination()
Destination("Oregon")
Destination.place 
Expected Output: Oregon

