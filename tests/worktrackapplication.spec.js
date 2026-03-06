const { test, expect } = require('@playwright/test');
const WorkTrackPage = require("../pages/workTrackPage")


test('Start Session Using POM', async ({ page }) =>
{
	
	await page.goto('https://4l3b.github.io/WorkTrack/workTrack.html')

	const worktrackPage = new WorkTrackPage(page)
	await worktrackPage.verifyClockOutTimeLeftBeforeSession()
	await worktrackPage.startSessionManually()
	await worktrackPage.verifyClockOutTimeLeft()
	
});
