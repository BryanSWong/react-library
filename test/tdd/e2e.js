module.exports = {
    beforeEach: (browser) => {
      browser
        .url('http://localhost:3000/')
        .waitForElementVisible('body', 'React Tube page load.');
    },

    'Test 1: Page load': (browser) => {
        browser.assert.title('React Library');
      },

    //   'Test 2 : Page header existence': (browser) => {
    //     browser
    //       .waitForElementPresent(headerTextLocator)
    //       .waitForElementVisible(headerTextLocator)
    //       .expect.element(headerTextLocator)
    //       .text.to.equal('Welcome to React Tube');
    //   },
    
    //   'Test 3: Form title existence': (browser) => {
    //     browser
    //       .waitForElementPresent(formLocator)
    //       .waitForElementVisible(formLocator)
    //       .expect.element(formLocator)
    //       .text.to.equal(SIGN_UP);
    //   },
    
    //   'Test 4: Logo image existence': (browser) => {
    //     browser.assert.visible('#logo', 'Verify the existence of the logo.');
    //   },
    
    //   'Test 5: Email field existence': (browser) => {
    //     browser.assert.visible(
    //       emailLocator,
    //       'Verify the existence of email field.'
    //     );
    //   },
    
    //   'Test 6: Password field existence': (browser) => {
    //     browser.assert.visible(
    //       passwordLocator,
    //       'Verify the existence of password field.'
    //     );
    //   },
    
    //   'Test 7: Submit button existence': (browser) => {
    //     browser.assert
    //       .visible(buttonLocator, 'Verify the existence of submit button.')
    //       .assert.containsText(
    //         buttonLocator,
    //         SIGN_UP,
    //         `Verify that the text inside the button is '${SIGN_UP}'.`
    //       )
    //       .expect.element(buttonLocator)
    //       .text.to.equal(SIGN_UP);
    //   },
    
    //   'Test 8: Switch to Sign In existence': (browser) => {
    //     browser.assert
    //       .visible(
    //         signInSignUpLocator,
    //         'Verify the existence of SWITCH TO SIGN IN button.'
    //       )
    //       .assert.containsText(
    //         signInSignUpLocator,
    //         SWITCH_TO_SIGN_IN,
    //         `Verify that the text inside the button is '${SWITCH_TO_SIGN_IN}'.`
    //       )
    //       .expect.element(signInSignUpLocator)
    //       .text.to.equal(SWITCH_TO_SIGN_IN);
    //   },
    
    //   'Test 9: Submit button changes to Sign In when Switch to SIGN IN button is clicked': (
    //     browser
    //   ) => {
    //     browser.assert
    //       .visible(
    //         signInSignUpLocator,
    //         `Verify the existence of ${SWITCH_TO_SIGN_UP} button.`
    //       )
    //       .assert.visible(buttonLocator, 'Verify the existence of submit button.')
    //       .click(signInSignUpLocator)
    //       .pause(WAIT_SWITCH)
    //       .assert.containsText(
    //         buttonLocator,
    //         SIGN_IN,
    //         `Verify that the text inside the button is '${SIGN_IN}'.`
    //       )
    //       .expect.element(buttonLocator)
    //       .text.to.equal(SIGN_IN);
    //   },
    
    //   'Test 10: Submit button changes back to Sign Up when Sign In / Sign Up button is clicked': (
    //     browser
    //   ) => {
    //     browser.assert
    //       .visible(
    //         signInSignUpLocator,
    //         `Verify the existence of ${SWITCH_TO_SIGN_UP} button.`
    //       )
    //       .assert.visible(buttonLocator, 'Verify the existence of submit button.')
    //       .click(signInSignUpLocator)
    //       .pause(WAIT_SWITCH)
    //       .click(signInSignUpLocator)
    //       .pause(WAIT_SWITCH)
    //       .expect.element(buttonLocator)
    //       .text.to.equal(SIGN_UP);
    //   },

};