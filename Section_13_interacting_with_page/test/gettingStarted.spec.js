//The basic setup of a testcase

describe('Getting started', function () {
  it.skip('should open a webpage', function () {
    // browser.url('https://the-internet.herokuapp.com/');
    browser.url('abtest'); // relative url (bae url in config file)

    console.log(browser.getUrl()); //grabbing the current UR:
  });

  it('Should click an element', async function () {
    await browser.url('/');
    const abtestLink = await $('#content > ul > li:nth-child(1) > a'); //dollar sign replaces documennt.queryselector
    console.log(abtestLink.getText());
    await abtestLink.click();
  });

  it('Should inspect the h2 element', async function () {
    await browser.url('/');
    const h2Heading = await $('#content > h2');
    console.log(`The h2 text is ${h2Heading.getText()}`);
  });
});
