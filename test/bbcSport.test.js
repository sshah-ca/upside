// Upside Homework Assignment
// Sachin Shah
// Typically use xpath for locators

// could of used chai's assert
require('chai').should();
 
// Selenium WebDriver - could be moved to a library
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
 
// only setup for Chrome since using my personal MacBook
// could be moved to a library
var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
 
describe('test bbc.com', () => {
  
  // always return to google.com before each test
  beforeEach(function setupWebdriver(done){
        driver.get("http://google.com").then( done ) 
  });

  // Made each step in homework a different test just to show more than one test
  // Each test could be a step and run consecutively as well. (probably most ideal here)
  it('should navigate to bbc.com', done => {
    driver.get('http://bbc.com/')
    .then(() => driver.getTitle())
      .then((title) => title.should.equal('BBC - Homepage'))
    .then(() => done())
    .catch(error => done(error))
    ;
  });


  it('should navigate to Sport on bbc.com', done => {
    driver.get('http://bbc.com/')
    .then(() => driver.getTitle())
      .then((title) => title.should.equal('BBC - Homepage'))
    var sport = driver.wait(webdriver.until.elementLocated(webdriver.By.className("orb-nav-sport")), 10000)
    sport.click()
      .then(() => driver.wait(webdriver.until.elementLocated(webdriver.By.className("global-header__all-sports-button")), 10000))
      .then(() => driver.getTitle())
        .then((title) => title.should.equal('Home - BBC Sport'))
    .then(() => done())
    .catch(error => done(error))
    ;
  });

  it('should navigate to Sport on bbc.com and verify article', done => {
    driver.get('http://bbc.com/')
    .then(() => driver.getTitle())
      .then((title) => title.should.equal('BBC - Homepage'))
    var sport = driver.wait(webdriver.until.elementLocated(webdriver.By.className("orb-nav-sport")), 10000)
    sport.click()
      .then(() => driver.wait(webdriver.until.elementLocated(webdriver.By.className("global-header__all-sports-button")), 10000))
      .then(() => driver.getTitle())
        .then((title) => title.should.equal('Home - BBC Sport'))
    var sport_article = driver.wait(webdriver.until.elementLocated(webdriver.By.className("lakeside__title-text")), 10000)
    var sport_article_header = sport_article.getText()
    sport_article.click()
      .then(() => driver.wait(webdriver.until.elementLocated(webdriver.By.id("responsive-story-page")), 10000))
	.then(() => driver.getTitle())
        // A better way to verify this is to use the link text to find in the article, but I couldn't get that to work.
	.then((title) => title.should.equal('McLaren: Carlos Sainz to replace Fernando Alonso from 2019 - BBC Sport'))
    .then(() => done())
    .catch(error => done(error))
    ;
  });


  // The after block is run after all "it" blocks finish.
  // If driver.quit() isn't called, the session will remain open until the default 10 minute timeout is reached.
  after(function quitWebdriver(done){
      driver.quit()
      .then(done);
  });

});
