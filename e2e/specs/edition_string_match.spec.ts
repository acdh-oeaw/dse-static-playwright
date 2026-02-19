/* eslint-disable playwright/no-conditional-expect */
/* eslint-disable playwright/no-conditional-in-test */
import { expect, test } from "@playwright/test";

import { fetchTestData } from "../utils/helpers.js";

type DetailInfo = {
    id: string;
    description: string;
    description_long: string;
}

const pathToTest = "D_000002-003-000";

const testData: Array<DetailInfo> = await fetchTestData(`${pathToTest}.json`);

testData.forEach((detail_info) => {
    test(`testing edition page for ${pathToTest} (${detail_info.id})`, async ({ page }) => {
        await page.goto(`http://localhost:8000/html/${pathToTest}.html`);

        const long_desc_element = page.getByTestId(detail_info.id);
        await expect(long_desc_element).toHaveText(detail_info.description_long);

    });
});
