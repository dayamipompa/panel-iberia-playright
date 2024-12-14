const { test, expect } = require('@playwright/test');
const { PageSearchFlight } = require('../pageObjectModel/PageSearchFlight');
import { URLBASE, FLIGHT } from '../constant/ConstantURL';

test.beforeEach(async ({ page }) => {
    await page.goto(URLBASE.URLIBERIA);
    const flight = new PageSearchFlight(page);
    await flight.AcepptCookies();
});

test.describe('Flight Search Test Empty Fields', () => {
    test('Flight Search Test - Empty Fields', async ({ page }) => {
        const flight = new PageSearchFlight(page);
        await flight.fillDataEmptyFields();
        await expect(flight.errorInputOri).toBeVisible();
        await expect(flight.errorInputDes).toBeVisible();
        await expect(flight.errorInputDate).toBeVisible();       
                          
    });

    test('Flight Search Test - Empty Fields - Origin error message', async ({ page }) => {
        const flight = new PageSearchFlight(page);
        await flight.fillDeparture('');
        await flight.fillDestinacion(FLIGHT.DESTINATION);
        await flight.fillDepartureDate(FLIGHT.DEPERTUREDATE);
        await flight.fillReturnDate(FLIGHT.RETURNDATE);
        await flight.clickSearchButton();
        await expect(flight.errorInputOri).toBeVisible();
    });

    test('Flight Search Test - Empty Fields - Destination error message', async ({ page }) => {
        const flight = new PageSearchFlight(page);
        await flight.fillDeparture(FLIGHT.ORIGIN);
        await flight.fillDestinacion('');
        await flight.fillDepartureDate(FLIGHT.DEPERTUREDATE);
        await flight.fillReturnDate(FLIGHT.RETURNDATE);
        await flight.clickSearchButton();
        await expect(flight.errorInputDes).toBeVisible();
    });

    test('Flight Search Test - Empty Fields - Dates error message', async ({ page }) => {
        const flight = new PageSearchFlight(page);
        await flight.fillDeparture(FLIGHT.ORIGIN);
        await flight.fillDestinacion(FLIGHT.DESTINATION);
        await flight.fillDepartureDate('');
        await flight.fillReturnDate('');
        await flight.clickSearchButton();
        await expect(flight.errorInputDate).toBeVisible();
    });

    //add relateed tests here ...
});