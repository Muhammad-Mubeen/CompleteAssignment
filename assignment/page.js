'use strict'

var objact = require('../assignment/testdata/data.json');
//var site = 'https://www.kayak.com/';
module.exports={
    toDo :{
       //  addField: element(by.xpath('/html[1]/body[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/section[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]')),
        addField: element(by.xpath("//div[contains(@id,'-origin-airport-display')]")),
        clickDestTo: element(by.xpath("//div[contains(@id,'-destination-airport-display')]")),
        
         // okField: element(by.xpath('/html[1]/body[1]/div[6]/div[1]/div[2]/div[1]/div[3]/input[1]')),
        // drodownKarachi: element(by.xpath("//div[@class='item-info']")),
        // crossfield: element(by.xpath("//button[@id='-guWg-submit']//*[@class='_ivP _iv1']")),
        // checkedBox: element(by.model('todo.done')),
        // addButton: element(by.xpath('/html[1]/body[1]/div[2]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/section[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[2]/button[1]/span[1]/*'))
        
       
        tripDropdown1: element(by.xpath(objact.locator.pageLocators.tripDropdown1)),
        tripSelection1: element(by.xpath(objact.locator.pageLocators.tripSelection1)),
        travlerSelection: element(by.xpath(objact.locator.pageLocators.travlerSelection)),
        adultSelection: element(by.xpath(objact.locator.pageLocators.adultSelection)),
        adultCount: element(by.xpath(objact.locator.pageLocators.adultCount)),
        adultCountDown: element(by.className(objact.locator.pageLocators.adultCountDown)),
        seniorsAdd: element(by.xpath(objact.locator.pageLocators.seniorsAdd)),
        childAdd: element(by.xpath(objact.locator.pageLocators.childAdd)),
        youthAdd: element(by.xpath(objact.locator.pageLocators.youthAdd)),
        seatInfantAdd: element(by.xpath(objact.locator.pageLocators.seatInfantAdd)),
        lapInfantAdd: element(by.xpath(objact.locator.pageLocators.lapInfantAdd)),
        searchField: element(by.xpath(objact.locator.pageLocators.searchField)),
        searchDataF: element(by.xpath(objact.locator.pageLocators.searchData)),
        originScenario2: element(by.xpath(objact.locator.pageLocators.originScenario2)),
        destinationScenario2: element(by.xpath(objact.locator.pageLocators.destinationScenario2)),
        originScenario3: element(by.xpath(objact.locator.pageLocators.originScenario3)),
        destinationScenario3: element(by.xpath(objact.locator.pageLocators.destinationScenario3)),
        originScenario4: element(by.xpath(objact.locator.pageLocators.originScenario4)),
        destinationScenario4: element(by.xpath(objact.locator.pageLocators.destinationScenario4)),

       // googleTest: element(by.name(objact.locator.pageLocators.name)),
        areaSelect1: element(by.xpath(objact.locator.pageLocators.selection1)),
        searchDestinationInput : element(by.xpath(objact.locator.pageLocators.searchDestinationInput)),
        destinationSelection : element(by.xpath("//div[contains(text(),'Dubai, United Arab Emirates')]")),
        originSelection: element(by.xpath("//li[@id='ap-ATL/11123']//div[@class='item-info']")),
        departureDateClick : element(by.className(objact.locator.pageLocators.departureDateClick)),
        inputDepartureDate : element(by.className(objact.locator.pageLocators.inputDepartureDate)),
        arrivalDateClick : element(by.xpath(objact.locator.pageLocators.arrivalDateClick)),
        arrivalDateInput : element(by.className(objact.locator.pageLocators.arrivalDateInput)),
        finalSearch : element(by.xpath(objact.locator.pageLocators.finalSearch)),
        randomClick : element(by.xpath(objact.locator.pageLocators.randomClick)),
        errorMoreAdults: element(by.xpath(objact.locator.pageLocators.errorMoreAdults)),
        childCount: element(by.xpath(objact.locator.pageLocators.childCount)),
     //   tripDropdown: element(by.cssContainingText('option', 'Round-trip')).click(),
    //    tripSelection: element(by.xpath("/html[1]/body[1]/div[4]/div[1]/div[2]/ul[1]/li[2]"))


    },

    go: function(){
        browser.get(objact.testingURL);
        browser.waitForAngular();
    },


    go1: function(){
        browser.get(objact.secondURL);
        browser.waitForAngular();
    },

    loadpage:  async function(site) {
        browser.ignoreSynchronization = true;
        await browser.get(objact.testingURL);
    },

    // oneWay: function(){
    //     browser.waitForAngular();
    //     browser.ignoreSynchronization = true;
    //     browser.sleep(3000);

    //     var todo = this.toDo;
    //     browser.wait(ExpectedConditions.elementToBeClickable(todo.tripDropdown1),70000,'click'); 
    //     todo.tripDropdown1.click();
    //     browser.sleep(6000);

    //     browser.wait(ExpectedConditions.elementToBeClickable(todo.tripSelection1),70000,'click');
    //     todo.tripSelection1.click();
    //     browser.sleep(6000);
    // },


    // multiCity: function(){
    //     browser.waitForAngular();
    //     browser.ignoreSynchronization = true;
    //     browser.sleep(3000);

    //     var todo = this.toDo;
    //     browser.wait(ExpectedConditions.elementToBeClickable(todo.tripDropdown1),70000,'click'); 
    //     todo.tripDropdown1.click();
    //     browser.sleep(6000);

    //     browser.wait(ExpectedConditions.elementToBeClickable(todo.tripSelection),70000,'click');
    //     todo.tripSelection2.click();
    //     browser.sleep(6000);
    // },

    seatSelection: function(adultCount,seniorCount,youthCount,childCount,seatInfantCount,lapInfantCount){

        browser.waitForAngular();
        browser.ignoreSynchronization = true;
        browser.sleep(3000);

        var todo = this.toDo;
        browser.wait(ExpectedConditions.elementToBeClickable(todo.travlerSelection),80000,'click');
        todo.travlerSelection.click();
        browser.sleep(4000);

        // myFunction(objact.Scenario1.passangers.Adults,objact.Scenario1.passangers.Seniors);
       
            var i;
    

            for (i = 1; i < adultCount; i++) { 
                browser.wait(ExpectedConditions.elementToBeClickable(todo.adultSelection),80000,'click');
                todo.adultSelection.click();
                browser.sleep(500);
            }
            for (i = 0; i < seniorCount; i++) { 
                browser.wait(ExpectedConditions.elementToBeClickable(todo.seniorsAdd),80000,'click');
                todo.seniorsAdd.click();
                browser.sleep(2000);
            }
            for (i = 0; i < youthCount; i++) {
                browser.wait(ExpectedConditions.elementToBeClickable(todo.youthAdd),80000,'click');
                todo.youthAdd.click();
                browser.sleep(2000);
            }
            for (i = 0; i < childCount; i++) {
                browser.wait(ExpectedConditions.elementToBeClickable(todo.childAdd),80000,'click');
                todo.childAdd.click();
                browser.sleep(2000);
            }
            for (i = 0; i < seatInfantCount; i++) {
                browser.wait(ExpectedConditions.elementToBeClickable(todo.seatInfantAdd),80000,'click');
                todo.seatInfantAdd.click();
                browser.sleep(2000);
            }
            for (i = 0; i < lapInfantCount; i++) {
                browser.wait(ExpectedConditions.elementToBeClickable(todo.lapInfantAdd),80000,'click');
                todo.lapInfantAdd.click();
                browser.sleep(2000);
            }
    

        // for (i = 0; i < 1; i++) { 
        //     var todo = this.toDo;
        //     browser.wait(ExpectedConditions.elementToBeClickable(todo.adultCountDown),80000,'click');
        //     todo.adultCountDown.click();
        //     browser.sleep(1000);
        // }



        // todo.adultCount.getAttribute('test').then(function (text) {
        //     console.log("okay: ");
        //     console.log(text);
        // });
        // var getAdultNumber;
        // var getChildNumber;
        // var value;
        // setTimeout(
        //     function(){
        //     todo.adultCount.getAttribute("value").then(function (value) {
        //     console.log(value);
        //     getAdultNumber=value;
        //     console.log("whattttttt: ", getAdultNumber);
        //     return value;
        // })},25000);

        // setTimeout(
        //     function(){
        //     todo.childCount.getAttribute("value").then(function (value) {
        //     console.log(value);
        //     getChildNumber=value;
        //     console.log("whattttttt: ", getChildNumber);
        //     return value;
        // })},25000);

        // browser.sleep(6000);
      
        // setTimeout(
        //     function() {
        //         console.log("okayyyyy: ", getAdultNumber);
        //         console.log("okayyyyy1: ", getChildNumber);
        //       //  expect (todo.errorMoreAdults).toBe('Searches cannot have more than 9 adults');
        //         if(getAdultNumber > 8)
        //         {
        //            // expect (errorMoreAdults).toBe('Searches cannot have more than 9 adults');
        //             console.log("1");
        //         }
        //         else if (getAdultNumber == 0 && getChildNumber == 1)
        //         {
        //           //  expect (todo.errorMoreAdults).toBe('KAYAK cannot run searches for unaccompanied minors');
        //             console.log("2");
        //         }
        //         else{
        //             console.log("Selected Adutls are greater than 0");
        //         }
             
        //     }, 35000);


          browser.sleep(6000);
        
    },
    
    // adultVerfiication: function(){

    //     browser.sleep(3000);

    //     var todo = this.toDo;
    //     //browser.wait(ExpectedConditions.elementToBeClickable(todo.tripDropdown2),80000,'click');
    //     //todo.adultsCount.getText()
    //     //var new_text = '0';
    //     element(todo.adultsCount).getText().then( function(new_text){
    //         expect(original_text).not.toBe(new_text);
    //       });

    //     browser.sleep(6000);
    // }



    destinationFrom: function(x,y,z){
        browser.waitForAngular();
        browser.ignoreSynchronization = true;
        browser.sleep(3000);
        var todo = this.toDo;
        browser.wait(ExpectedConditions.elementToBeClickable(x),70000,'click'); 
        todo.addField.click();
        browser.sleep(6000);

        //browser.wait(ExpectedConditions.elementToBeClickable(todo.searchDataF),70000,'sendKeys'); 
        todo.searchDataF.sendKeys(y);
        browser.sleep(6000);

        browser.wait(ExpectedConditions.elementToBeClickable(z),70000,'click'); 
        z.click();
        browser.sleep(6000);
    },
//google test
    // browser.wait(ExpectedConditions.elementToBeClickable(todo.googleTest),70000,'sendKeys'); 
    //     todo.googleTest.sendKeys(objact.locator.Scenario1.originInput);
    //    // element(by.xpath(locator.pageLocators.searchData
    //     browser.sleep(6000);


        
        // if(browser.wait(ExpectedConditions.elementToBeClickable(todo.crossSign)))
        // {
        // todo.crossSign.click();
        // }else{
        // todo.crossfield.clear();




    destinationTo: function(x,y,z){
        browser.waitForAngular();
        browser.ignoreSynchronization = true;
        browser.sleep(3000);

        var todo = this.toDo;
        browser.wait(ExpectedConditions.elementToBeClickable(x),70000,'click'); 
        x.click();
        browser.sleep(6000);

        todo.searchDestinationInput.sendKeys(y);
        browser.sleep(5000);

        browser.wait(ExpectedConditions.elementToBeClickable(z),70000,'click'); 
        z.click();
        browser.sleep(6000);
    },



    departureDate: function(x,y){
        browser.waitForAngular();
        browser.ignoreSynchronization = true;
        browser.sleep(3000);

        var todo = this.toDo;
        browser.wait(ExpectedConditions.elementToBeClickable(x),70000,'click'); 
        x.click();
        browser.sleep(6000);

        todo.inputDepartureDate.sendKeys(y);
        browser.sleep(5000);
    },

    arrivalDate: function(x,y,z){
        browser.waitForAngular();
        browser.ignoreSynchronization = true;
        browser.sleep(3000);

        var todo = this.toDo;
        browser.wait(ExpectedConditions.elementToBeClickable(todo.randomClick),70000,'click'); 
        todo.randomClick.click();
        browser.sleep(6000);

        var todo = this.toDo;
        browser.wait(ExpectedConditions.elementToBeClickable(x),70000,'click'); 
        x.click();
        browser.sleep(6000);

        y.sendKeys(z);
        browser.sleep(5000);
    },

    searchFlight: function(){
        var todo = this.toDo;
        browser.wait(ExpectedConditions.elementToBeClickable(todo.finalSearch),70000,'click'); 
        todo.finalSearch.click();
        browser.sleep(6000);
    }


    

    
        
};

