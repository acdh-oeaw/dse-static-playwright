/* eslint-disable playwright/no-conditional-expect */
/* eslint-disable playwright/no-conditional-in-test */
import { expect, test } from "@playwright/test";

// import type { TestDataObjectComment } from "../../src/interfaces.js";
import { fetchTestData } from "../utils/helpers.js";

const pathToTest = "D_000002-003-000";

const testData: Array<any> = await fetchTestData(`${pathToTest}.json`);

testData.forEach((detail_info) => {
    test(`testing edition page for ${pathToTest} (${detail_info.id})`, async ({ page }) => {
        await page.goto(`http://localhost:8000/html/${pathToTest}.html`);

        const long_desc_element = page.getByTestId(detail_info.id);
        console.log("Test", long_desc_element);
        // console.log(detail_info.description_long);
        await expect(long_desc_element).toHaveText(detail_info.description_long);

    });
});
