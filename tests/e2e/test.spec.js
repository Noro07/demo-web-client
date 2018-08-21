describe('Protractor Test', () => {
  it('should have a title', () => {
    browser.waitForAngularEnabled(false);
    browser.get('/test/#/');
    browser.sleep(10000);

    expect(browser.getTitle()).toEqual('Demo web');
  });
});
