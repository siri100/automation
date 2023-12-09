// const onboarding = require('./onboarding');

describe('New Member Onboarding Flow', () => {

    it('New User Signup with Referral Code', async () => {
       let onboarding = new Onboarding();
        await $('~Get Started').click();
        await $('~phone-input').addValue("954-555-0128");
        await driver.pause(2000);
        await $('~Next').click();
        await driver.$('(//XCUIElementTypeOther[@name="       "])[2]').addValue('0128'); // This selects the first child of the <body> element
        console.log('adsfasdfasdf');
        await $('~registration-button-referral-code').click();
        await $('~referral-code-input').addValue("qapass");
        await $('~Next').click();
        await $('~application-flow-text-input-first_name').addValue("Automation");
        await $('~Next').click();
        await $('~application-flow-text-input-last_name').addValue("test");
        await $('~Next').click();
        await $('~application-flow-text-input-email').addValue("auttdtttomationtesttttin@dorsia.com");
        await $('~Next').click();
        await $('~application-flow-pill-select-gender').click();
        await driver.pause(2000);
        await $('~application-flow-date-picker-button-birthday').click();
        await $('~application-flow-text-input-company').addValue("Dorsia");
        await $('~Next').click();
        await $('~application-flow-text-input-job_title').addValue("confidential");
        await $('~Next').click();
        await $('~Advertising, Marketing & PR').click();
        await $('~application-flow-city-select-city').addValue("New York");
        await $('~application-flow-city-select-city-option-1').click();
        await $('~Next').click();
        // await driver.$('~waiting-room-checkbox-terms-acceptance').click(); // This selects the first child of the <body> elemen
        await $('~button-test-id').click();
        // await $('~Next').click(); < fix
        await driver.pause(2000);
        // await $('~Credit or debit card').click(); < fix
        await driver.$('(//XCUIElementTypeTextField[@name="dark-text-input"])[1]').addValue('Dorsia Test'); // This selects the first child of the <body> element
        await driver.$('(//XCUIElementTypeTextField[@name="dark-text-input"])[2]').addValue('4242424242424242'); // This selects the first child of the <body> element
        await driver.$('(//XCUIElementTypeTextField[@name="dark-text-input"])[3]').addValue('11/28'); // This selects the first child of the <body> element       
        await driver.$('(//XCUIElementTypeTextField[@name="dark-text-input"])[4]').addValue('424'); // This selects the first child of the <body> element 
        await driver.$('(//XCUIElementTypeTextField[@name="dark-text-input"])[5]').addValue('10021'); // This selects the first child of the <body> element 
        // await $('~Done').click(); < fix
        await $('~Next').click();
        await $('~Continue').click();
        await $('~Allow While Using App').click();

        // application-flow-city-select-city
        // application-flow-city-select-city-option-1

        // Advertising, Marketing & PR

        // application-flow-text-input-job_title
        // application-flow-text-input-company
        // application-flow-text-input-email
        // await $('~Continue').click();
        // 
        // application-flow-pill-select-gender

    
        // await $('~verification-code-input').addValue("1337");
        // await $('~test:id/verification-code-input').addValue("0135");
        // await $('~get-started-button').click();

    });
    it('New User Signup with Contacts', async () => {
        await $('~Get Started').click();
        await $('~phone-input').addValue("954-555-0122");
        await driver.pause(2000);
        await $('~Next').click();
        await driver.$('(//XCUIElementTypeOther[@name="       "])[2]').addValue('0122'); // This selects the first child of the <body> element
        console.log('adsfasdfasdf');
        await driver.pause(2000);
        await $('~Next').click();
        await $('~Continue').click();
        await driver.pause(2000);
        await $('~Allow While Using App').click();
        await driver.$('(//XCUIElementTypeOther[@name="San Francisco · Today, Nov 30"])[3]/XCUIElementTypeOther[1]/XCUIElementTypeOther').click(); // This selects the first child of the <body> element
        await driver.$('//XCUIElementTypeNavigationBar[@name="RNSScreen"]/XCUIElementTypeTextField').addValue('Cote');
        await $('~COTE Dev Korean Flatiron,  New York').click();
        
        await driver.$('(//XCUIElementTypeOther[@name="Today, Nov 30 Instant booking"])[2]').click();
        await driver.$('(//XCUIElementTypeOther[@name="4:45pm From $125/pp 2-6"])[2]').click();
        await driver.$('(//XCUIElementTypeOther[@name="2 $125/person Indoor"])[2]').click();
        await driver.$('//XCUIElementTypeOther[@name="Website"]').click(); 
    });

    // it('New User Signup with Skip Contacts', async () => {
    //     await $('~Get Started').click();
    //     await $('~phone-input').addValue("954-555-0122");
    //     await driver.pause(2000);
    //     await $('~Next').click();
    //     await driver.$('(//XCUIElementTypeOther[@name="       "])[2]').addValue('0122'); // This selects the first child of the <body> element
    //     console.log('adsfasdfasdf');
    //     await driver.pause(2000);
    //     await $('~Next').click();
    //     await $('~Continue').click();
    //     await driver.pause(2000);
    //     await $('~Allow While Using App').click();
    //     await driver.$('(//XCUIElementTypeOther[@name="San Francisco · Today, Nov 28"])[3]/XCUIElementTypeOther[1]/XCUIElementTypeOther').click(); // This selects the first child of the <body> element
    //     await driver.$('//XCUIElementTypeNavigationBar[@name="RNSScreen"]/XCUIElementTypeTextField').addValue('Cote');
    //     await $('~COTE Dev Korean Flatiron,  New York').click();
        
    //     await driver.$('(//XCUIElementTypeOther[@name="Today, Nov 28 Instant booking"])[2]').click();
    //     await driver.$('(//XCUIElementTypeOther[@name="4:45pm From $125/pp 2-6"])[2]').click();
    //     await driver.$('(//XCUIElementTypeOther[@name="2 $125/person Indoor"])[2]').click();
    //     await driver.$('//XCUIElementTypeOther[@name="Website"]').click(); 
    // });


});




