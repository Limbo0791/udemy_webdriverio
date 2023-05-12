//The basic setup of a testcase

describe('Getting started', function () {
  it('should open a webpage', function () {
    // browser.url('https://the-internet.herokuapp.com/');
    browser.url('abtest'); // relative url (bae url in config file)

    console.log(browser.getUrl()); //grabbing the current UR:
  });

  it('Should click an element', function () {
    $('#content > ul > li:nth-child(1) > a').click(); //dollar sign replaces documennt.queryselector

    browser.pause(3000);
  });
});
