const { expect } = require('@playwright/test');

exports.JobSearchPage = class JobSearchPage {

     constructor(page) {
          this.page = page
          this.SearchAndFilterJobs

     }

     async NagivateToUrl() {
          await this.page.goto('https://www.lanefinder.com/');
          await this.page.click('text=Allow all cookies');
          await this.page.click('text=Show 4,280 Jobs');
     }

     async WithClassBOwnerOperatorEnabled() {
          await this.page.locator('.filterPanel-module--content--3e51e > .filter-module--filterHeader--251b0 > .filter-module--formField--133a7:nth-child(2) > .switch-module--switchContainer--96157 > .button-module--button--47b44:nth-child(2)')
          await this.page.click('.filterPanel-module--content--3e51e > .filter-module--filterHeader--251b0 > .filter-module--formField--133a7:nth-child(2) > .switch-module--switchContainer--96157 > .button-module--button--47b44:nth-child(2)')
          await this.page.locator('.filter-module--filterHeader--251b0 > .filter-module--formField--133a7 > .switchButton-module--switchButton--ee08b:nth-child(3) > .switchButton-module--switchContainer--8028a > .switchButton-module--slider--5478f')
          await this.page.click('.filter-module--filterHeader--251b0 > .filter-module--formField--133a7 > .switchButton-module--switchButton--ee08b:nth-child(3) > .switchButton-module--switchContainer--8028a > .switchButton-module--slider--5478f')
          await expect(this.page.getByText('Sorry, no jobs matching all filters')).toBeVisible();

     }
     async LanefinderBenefitsWithHaulTypeDryVan() {
          await this.page.locator('.filter-module--filterHeader--251b0 > .mb-1 > .switchButton-module--switchButton--ee08b > .switchButton-module--switchContainer--8028a > .switchButton-module--slider--5478f')
          await this.page.click('.filter-module--filterHeader--251b0 > .mb-1 > .switchButton-module--switchButton--ee08b > .switchButton-module--switchContainer--8028a > .switchButton-module--slider--5478f')
          await this.page.locator('.jobSearchFullScreen-module--full-screen-container--9e55b > .jobSearchFullScreen-module--full-screen-item--64266 > .filterPanel-module--content--3e51e > #truckTrailer > .filter-module--filterGroupHeader--bc5a6')
          await this.page.click('.jobSearchFullScreen-module--full-screen-container--9e55b > .jobSearchFullScreen-module--full-screen-item--64266 > .filterPanel-module--content--3e51e > #truckTrailer > .filter-module--filterGroupHeader--bc5a6')
          await this.page.locator('div:nth-child(2) > div:nth-child(2) > .checkbox-module--checkbox--23991 > .checkbox-module--checkboxLabel--ed53a > .checkbox-module--checkboxIndicator--1ba22')
          await this.page.click('div:nth-child(2) > div:nth-child(2) > .checkbox-module--checkbox--23991 > .checkbox-module--checkboxLabel--ed53a > .checkbox-module--checkboxIndicator--1ba22')
          await expect(this.page.getByText('51 jobs matching all filters')).toBeVisible();
     }
     async CompanyEqipmemtWithTructSpeed() {

          await this.page.locator('.jobSearchFullScreen-module--full-screen-container--9e55b > .jobSearchFullScreen-module--full-screen-item--64266 > .filterPanel-module--content--3e51e > #companyEquipment > .filter-module--filterGroupHeader--bc5a6')
          await this.page.click('.jobSearchFullScreen-module--full-screen-container--9e55b > .jobSearchFullScreen-module--full-screen-item--64266 > .filterPanel-module--content--3e51e > #companyEquipment > .filter-module--filterGroupHeader--bc5a6')
          await this.page.locator('.filter-module--filterGroupContentCollapsible--5f749 > .filter-module--formField--133a7:nth-child(1) > .select-module--select--8053d > .select-module--selectContainer--09c8e > select')
          await this.page.click('.filter-module--filterGroupContentCollapsible--5f749 > .filter-module--formField--133a7:nth-child(1) > .select-module--select--8053d > .select-module--selectContainer--09c8e > select')
          await this.page.selectOption("//div[@id='companyEquipment']//div[@class='collapsible-module--collapsibleContainer--e45d6']//div//select", {
               value: "66"
          })
          await this.page.locator('.filter-module--filterGroupContentCollapsible--5f749 > .filter-module--formField--133a7 > .filter-module--active--39247 > .select-module--selectContainer--09c8e > select')
          await this.page.click('.filter-module--filterGroupContentCollapsible--5f749 > .filter-module--formField--133a7 > .filter-module--active--39247 > .select-module--selectContainer--09c8e > select')
          await this.page.locator('#companyEquipment > .collapsible-module--collapsibleContainer--e45d6 > div > .filter-module--filterGroupContentCollapsible--5f749 > .switchButton-module--switchButton--ee08b > .switchButton-module--switchContainer--8028a > .switchButton-module--slider--5478f')
          await this.page.click('#companyEquipment > .collapsible-module--collapsibleContainer--e45d6 > div > .filter-module--filterGroupContentCollapsible--5f749 > .switchButton-module--switchButton--ee08b > .switchButton-module--switchContainer--8028a > .switchButton-module--slider--5478f')
          await expect(this.page.getByText('1,903 jobs matching all filters')).toBeVisible();
     }

}


