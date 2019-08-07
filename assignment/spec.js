
var todoPage = require('../assignment/page.js');
var objact = require('../assignment/testdata/data.json');

describe('This is a sample Page Object Model for protractor', function() {
    
    
    it('should navigate to the angular webpage', function() {
        todoPage.go();
    });


    var x = todoPage.toDo.addField;
    var y = objact.Scenario1.originInput;
    var z = todoPage.toDo.originSelection;


    var x1 = todoPage.toDo.clickDestTo
    var y1 = objact.Scenario1.destinationInput
    var z1 = todoPage.toDo.destinationSelection

    var x2 = todoPage.toDo.departureDateClick
    var y2 = objact.Scenario1.Departure


    var x3 = todoPage.toDo.arrivalDateClick
    var y3 = todoPage.toDo.arrivalDateInput
    var z3 = objact.Scenario1.Arrival
    
    // it('selec-t the trip type One way', function() {
    //     todoPage.oneWay ('New Task Item');
    // });

    // // it('select the trip type multi city', function() {
    // //     todoPage.multiCity ('New Task Item');     
    // // }); 

    var adultCount = objact.Scenario1.passangers.Adults;
    var seniorCount = objact.Scenario1.passangers.Seniors;
    var youthCount = objact.Scenario1.passangers.Youth
    var childCount = objact.Scenario1.passangers.Child
    var seatInfantCount = objact.Scenario1.passangers.seatInfant
    var lapInfantCount = objact.Scenario1.passangers.lapInfant
    
    
    it('Scenario 1:', function() {
        todoPage.destinationFrom (x,y,z);  
        todoPage.destinationTo (x1,y1,z1);   
        todoPage.departureDate (x2,y2);   
        todoPage.arrivalDate (x3,y3,z3);  
        todoPage.seatSelection (adultCount,seniorCount,youthCount,childCount,seatInfantCount,lapInfantCount); 
       todoPage.searchFlight ('New Task Item');    
    });


    it('Scenario 2:', function() {

        todoPage.destinationFrom (todoPage.toDo.addField,objact.Scenario2.originInput,todoPage.toDo.originScenario2);  
        todoPage.destinationTo (todoPage.toDo.clickDestTo,objact.Scenario2.destinationInput,todoPage.toDo.destinationScenario2);   
        todoPage.departureDate (todoPage.toDo.departureDateClick,objact.Scenario2.Departure);   
        todoPage.arrivalDate (todoPage.toDo.arrivalDateClick,todoPage.toDo.arrivalDateInput,objact.Scenario2.Arrival);  
        todoPage.seatSelection (objact.Scenario2.passangers.Adults,objact.Scenario2.passangers.Seniors,objact.Scenario2.passangers.Youth,objact.Scenario2.passangers.Child,objact.Scenario2.passangers.seatInfant,objact.Scenario2.passangers.lapInfant); 
        todoPage.searchFlight ('New Task Item');    
    });

    it('Scenario 3:', function() {

        todoPage.destinationFrom (todoPage.toDo.addField,objact.Scenario3.originInput,todoPage.toDo.originScenario3);  
        todoPage.destinationTo (todoPage.toDo.clickDestTo,objact.Scenario3.destinationInput,todoPage.toDo.destinationScenario3);   
        todoPage.departureDate (todoPage.toDo.departureDateClick,objact.Scenario3.Departure);   
        todoPage.arrivalDate (todoPage.toDo.arrivalDateClick,todoPage.toDo.arrivalDateInput,objact.Scenario3.Arrival);  
        todoPage.seatSelection (objact.Scenario3.passangers.Adults,objact.Scenario3.passangers.Seniors,objact.Scenario3.passangers.Youth,objact.Scenario3.passangers.Child,objact.Scenario3.passangers.seatInfant,objact.Scenario3.passangers.lapInfant); 
        todoPage.searchFlight ('New Task Item');    
    });

    it('Scenario 4:', function() {

        todoPage.destinationFrom (todoPage.toDo.addField,objact.Scenario4.originInput,todoPage.toDo.originScenario4);  
        todoPage.destinationTo (todoPage.toDo.clickDestTo,objact.Scenario4.destinationInput,todoPage.toDo.destinationScenario4);   
        todoPage.departureDate (todoPage.toDo.departureDateClick,objact.Scenario4.Departure);   
        todoPage.arrivalDate (todoPage.toDo.arrivalDateClick,todoPage.toDo.arrivalDateInput,objact.Scenario4.Arrival);  
        todoPage.seatSelection (objact.Scenario3.passangers.Adults,objact.Scenario3.passangers.Seniors,objact.Scenario3.passangers.Youth,objact.Scenario3.passangers.Child,objact.Scenario3.passangers.seatInfant,objact.Scenario3.passangers.lapInfant); 
        todoPage.searchFlight ('New Task Item');    
        todoPage.go1();
    });


    //expect(publisher_whitelist_page.popupToastIP.toEqual('Ip address removed'));
});

