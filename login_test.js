Feature('login');

Scenario('test something', ({ I }) => {
    I.amOnPage('/');
    I.fillField('[name="q"]', 'Krishna Kumar Singh');
    I.click('[name="btnK"]');
});
