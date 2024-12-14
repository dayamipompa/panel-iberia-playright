const { expect } = require('@playwright/test');

exports.PageSearchFlight = class PageSearchFlight {/**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;
        this.cookiesButton = this.page.locator('#onetrust-accept-btn-handler');
        this.departureInput = this.page.locator('#flight_origin1');
        this.destinacionInput = this.page.locator('#flight_destiny1');
        this.departureDateInput = this.page.locator('#flight_round_date1');
        this.returnDateInput = this.page.locator('#flight_return_date1');
        this.passengersButton = this.page.locator('#flight_passengers1');
        this.adultPassengers = this.page.locator('ul[data-id=V] li span#adult1 ~ div.ibe-people-counter__buttons > button[data-people-counter-button=more]');
        this.adultCountPassengers = this.page.locator('ul[data-id=V] li span#adult1');
        this.childrenPassengers = this.page.locator('ul[data-id=V] li.fc-people-counter-children button[data-people-counter-button=more]');
        this.childrenCountPassenger = this.page.locator('ul[data-id=V] li span#infants1');
        this.infantPassengers = this.page.locator('ul[data-id=V] li span#babys1 ~ div.ibe-people-counter__buttons > button[data-people-counter-button=more]');
        this.infantCountPassengers = this.page.locator('ul[data-id=V] li span#babys1');
        this.searchButton = this.page.locator('#buttonSubmit1');
        this.errorInputOri = this.page.locator('input#flight_origin1 ~ p[data-validate=exist]');
        this.errorInputOriEqual = this.page.locator('input#flight_origin1 ~ p[data-validate=equal]');
        this.errorInputDes = this.page.locator('input#flight_destiny1 ~ p[data-validate=exist]');
        this.errorInputDesEqual = this.page.locator('input#flight_destiny1 ~ p[data-validate=equal]');
        this.errorInputDate = this.page.locator('//input[@id="flight_round_date1"]/ancestor::div[@data-move="parent"]//p[@data-validate="exist"]');
    }
    
    async fillDeparture(departure) {
        await this.departureInput.fill(departure);
    }
    async fillDestinacion(destination) {
        await this.destinacionInput.fill(destination);
    }
    async fillDepartureDate(departureDate) {
        await this.departureDateInput.fill(departureDate);
    }
    async fillReturnDate(returnDate) {
        await this.returnDateInput.fill(returnDate);
    }
    async clickPassengersButton() {
        await this.passengersButton.click();
    }
    async setAdultPassengers(adultPassengers) {

        for (let index = 1; index < adultPassengers; index++) {
            await this.adultPassengers.click();
        }
    }
    async setChildrenPassengers(childrenPassengers) {

        for (let index = 0; index < childrenPassengers; index++) {
            await this.childrenPassengers.click();
        }
    }
    async setInfantPassengers(infantPassengers) {
        for (let index = 0; index < infantPassengers; index++) {
            await this.infantPassengers.click();
        }
    }
    async clickSearchButton() {
        await this.searchButton.click();
    }
    async AcepptCookies() {
        await this.cookiesButton.click();
    }
    async fillData(element) {
        await this.fillDeparture(element.origin);
        await this.fillDestinacion(element.destination);
        await this.fillDepartureDate(element.departureDate);
        await this.fillReturnDate(element.returnDate);
        await this.clickPassengersButton();
        await this.setAdultPassengers(element.adults);
        await this.setChildrenPassengers(element.children);
        await this.setInfantPassengers(element.infants);
    }
    async fillDataEmptyFields() {
        await this.fillDeparture('');
        await this.fillDestinacion(''); 
        await this.fillDepartureDate('');
        await this.fillReturnDate('');
        await this.clickPassengersButton();
        await this.clickSearchButton();
    }
};