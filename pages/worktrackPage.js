const {expect} = require("@playwright/test")

class WorkTrackPage
{
	
	constructor(page)
	{	
			
		this.page = page
		
		this.worktimeSideBtn = "#worktime-btn"
		this.worktimeBtnPopup = "#worktime-btn-popup"
		this.worktimePopupHours = "#hours-worktime"
		this.worktimePopupMinutes = "#minutes-worktime"
		this.worktimePopupSeconds = "#seconds-worktime"
		
		this.breakminSideBtn = "#breakmin-btn"
		this.breakminBtnPopup = "#breakmin-btn-popup"
		this.breakminPopupHours = "#hours-breakmin"
		this.breakminPopupMinutes = "#minutes-breakmin"
		
		this.clockinSideBtn = "#enterclockin-btn"
		this.clockinBtnPopup = "#clockin-btn-popup"
		this.clockinPopupHours = "#hours-clockin"
		this.clockinPopupMinutes = "#minutes-clockin"
		this.clockinPopupSeconds = "#seconds-clockin"
		
		this.clockOutField = "#clock-out"
		this.timeLeftField = "#countdown"
		
	}	
	
	async startSessionManually()
	{
	
		await this.page.click(this.worktimeBtnPopup)
		await this.page.fill(this.worktimePopupHours, "08")
		await this.page.fill(this.worktimePopupMinutes, "00")
		await this.page.fill(this.worktimePopupSeconds, "00")
		
		await this.page.click(this.breakminBtnPopup)
		await this.page.fill(this.breakminPopupHours, "00")
		await this.page.fill(this.breakminPopupMinutes, "30")
		
		await this.page.click(this.clockinBtnPopup)
		await this.page.fill(this.clockinPopupHours, "08")
		await this.page.fill(this.clockinPopupMinutes, "00")
		await this.page.fill(this.clockinPopupSeconds, "00")
			
	}
	
	
	async verifyClockOutTimeLeft()
	{
	
		await expect(this.page.locator(this.clockOutField)).not.toHaveText(/.*CLOCK OUT.*--:--:--/, { timeout: 10000 })
		await expect(this.page.locator(this.timeLeftField)).not.toHaveText(/.*TIME LEFT.*--:--:--/, { timeout: 10000 })
	
	}
	
	
	async verifyClockOutTimeLeftBeforeSession()
	{
		await expect(this.page.locator(this.clockOutField)).toHaveText(/.*CLOCK OUT.*--:--:--/)
		await expect(this.page.locator(this.timeLeftField)).toHaveText(/.*TIME LEFT.*--:--:--/)
	}

}

module.exports = WorkTrackPage
