const { test, expect} = require('@playwright/test');
const { PageSearchFlight } = require('../pageObjectModel/PageSearchFlight');
import { URLBASE,FLIGHT } from '../constant/ConstantURL';
const fs = require('fs');
const testData = JSON.parse(fs.readFileSync('./src/dataTest/formdata.json', 'utf-8'));

test.beforeEach(async ({ page }) => {
    await page.goto(URLBASE.URLIBERIA);
    const flight = new PageSearchFlight(page);
    await flight.AcepptCookies();
});

test.describe('Flight Search Test', () => {
    testData.forEach((element, index) => {
        test(`Flight Search Test - Scenario ${index + 1}: ${element.origin} a ${element.destination}`,
            async ({ page }) => {
                const flight = new PageSearchFlight(page);
                await flight.fillData(element);                  
                await expect(flight.departureInput).toHaveValue(element.origin);
                await expect(flight.destinacionInput).toHaveValue(element.destination);
                await expect(flight.departureDateInput).toHaveValue(element.departureDate);
                await expect(flight.returnDateInput).toHaveValue(element.returnDate);
                await expect(flight.adultCountPassengers).toHaveText(element.adults.toString());
                await expect(flight.childrenCountPassenger).toHaveText(element.children.toString());
                await expect(flight.infantCountPassengers).toHaveText(element.infants.toString());
                
            });
    });
    //add relateed tests here ...
});