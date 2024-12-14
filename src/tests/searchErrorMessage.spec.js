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

test.describe('Flight Search Test Same Origin and Destination ', () => {
    test('Flight Search Test - Same Origin and Destination', async ({ page }) => {
        const flight = new PageSearchFlight(page);
        await flight.fillDeparture(FLIGHT.ORIGIN);
        await flight.fillDestinacion(FLIGHT.ORIGIN);
        await flight.clickSearchButton();
        await expect(flight.departureInput).toHaveValue(FLIGHT.ORIGIN);
        await expect(flight.destinacionInput).toHaveValue(FLIGHT.ORIGIN);
        await expect(flight.errorInputDesEqual).toBeVisible();
        await expect(flight.errorInputOriEqual).toBeVisible();       

    });

    //add relateed tests here ...
});