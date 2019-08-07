
  //var HtmlScreenshotReporter = require('');

  exports.config = {
      directConnect: true,
  
      // Capabilities to be passed to the webdriver instance.
      capabilities: {
          'browserName': 'chrome',
  
          //  chromeOptions: {
          //   args:['--headless','--disable-gpu','--window-size=800x600','--disable-extensions --disable-web-security']
          // }
          
      },
      specs:["spec.js"],
      
  
      // Options to be passed to Jasmine.
  
      // jasmineNodeOpts: {
      //   showColors: true,
      //   defaultTimeoutInterval: 800000,
      //   //print: function() {}
      // },
      //
      //
      
  
      onPrepare: async () => {
  
          await browser.waitForAngularEnabled(false);
          browser.sleep(7000);
          browser.driver.manage().window().maximize();
        //   var AllureReporter = require('C:\\Users\\M Mubeen\\AppData\\Roaming\\npm\\node_modules\\jasmine-allure-reporter');
        //   jasmine.getEnv().addReporter(new AllureReporter({
        //       resultsDir: 'allure-results'
        //   }));
        //   jasmine.getEnv().afterEach(function (done) {
        //       browser.takeScreenshot().then(function (png) {
        //           allure.createAttachment('ScreenShot', function () {
        //               return new Buffer(png, 'base64')
        //           }, 'image/png')();
        //           done();
        //       })
        //   });

        
      },

      useAllAngular2AppRoots: true,
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',
  //'loginEncounters.js','EncounterST.js'
    // Spec patterns are relative to the current working directory when
    // protractor is called.
  
  suies: {
      
  },
      jasmineNodeOpts: {
          defaultTimeoutInterval: 4000000
      }
  
  };
  
  