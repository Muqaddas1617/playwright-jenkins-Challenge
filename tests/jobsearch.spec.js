// @ts-check
const { test, expect } = require('@playwright/test');
import { JobSearchPage } from '../Pages/jobsearch'

test.beforeEach(async ({page}) => {
  const jobSearch = new JobSearchPage(page)
  //Go to the starting url before each test.
  await jobSearch.NagivateToUrl();
})

test('Job Search With Class B and Owner Operator Enabled ', async ({ page }) => {
    const JobSearch = new JobSearchPage(page)
    await JobSearch.WithClassBOwnerOperatorEnabled()
    
  });
  
  test('Search Job with Lane finder benefits With Haul Type DryVan ', async ({ page }) => {
    const JobSearch = new JobSearchPage(page) 
    await JobSearch.LanefinderBenefitsWithHaulTypeDryVan()
  });
  test('Job Search with Company Eqipmemt have Truct Speed 66mph or Faster With Automatic Transmission', async ({ page }) => {
    const JobSearch = new JobSearchPage(page)

    await JobSearch.CompanyEqipmemtWithTructSpeed()
  });
