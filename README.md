# upside
upside homework assignment

### This repository will contain a test written in Javascript that will accomplish the following:

- navigates to bbc.com.
- navigates to one of the main sections shown in the header (e.g. Sport, Travel).
- navigates to one of the articles displayed on the section page.
- verifies that the page is indeed the correct article.

### The test uses the following test framework:

Mocha (https://mochajs.org/) with Chai Assertion using Selenium WebDriver

### This framework was selected based on the following criteria:

Some of the *major* considerations to consider when selecting a framework are the following:

- Unit testing vs. End-to-End testing - can the framework support both?  Can it also accomplish other types of testing if needed from performance to security?

- Test Driven Development (TDD), Behavior Driven Development (BDD)  

- Features of the framework:
  * Some examples:
      * Grouping of tests - from test size (small, medium, large based on duration), to feature tested
      * Asynchronous, Synchronous testing
      * Assertions
      * Test Reporting - it is very important to easily determine what tests passed/failed and why (especially with large         test suites / long running tests)

- Ease of use - can (most) anyone (developers/interns) write tests to add to the suite

- Size of the community - can you find examples, support, ideas, etc if needed

- Tool support - from IDE's, to debuggers does it have the support needed to easily develop (IntelliJ IDEA works well)

I believe Mocha with Chai using Selenium WebDriver fullfills the considerations above the best.

### Other frameworks considered (not in any specific order):

- Jest - not as mature as Mocha
- Tape - not as mature as Mocha
- Jasmine - good for unit testing
- PhantomJS - headless browsers are ok, but with Chrome not really needed
- Cucumber - I have used this in the past, and it is good for simple easy-to-read tests but had limitations around complex tests
- Nightwatch - easy to use, but not very flexible in using other modules

### Major decisions, assumptions, blockers, and other pertinent information:

- Node.js v6.x or newer
- Selenium WebDriver, Firefox gecko driver, mocha, and chai installed
- Only used Firefox - other browsers could easily be added
- Timeouts are generally an issue, so waitUntil and things like that are effective
- Didn't branch since not really dealing with version or others using the same files
- Didn't use pull requests since this was a simple test really not for production or being reviewed
- Libraries were not created for this simple test
- Once a framework has been selected, and trialed for your purpose it is generally good to document why certain decisions were made so you can reflect on those decisions in the future.  Confluence is generally easy to use to document such decisions.
- In addition, once a framework is selected most are easy and flexible enough to pump out automated tests fairly quickly if you create libraries/helper functions for tasks.

