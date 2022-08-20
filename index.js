require('dotenv').config()
const {firefox} = require('playwright')

;(async () => {
  const browser = await firefox.launch({
    headless: false
  })

  const page = await browser.newPage()
  await page.goto('https://my.jees-jlpt.jp/user/VCPGCLGN010.php')

  await page.locator('#txtMyPageID').fill(process.env.USERNAME)
  await page.locator('#pwdPassword').fill(process.env.PASSWORD)

  await page.$eval('#btnloginGlobal', el => el.click())

  
  await page.waitForSelector('#globalNavi > li:nth-child(5) > a:nth-child(1)')
  await page.$eval('#globalNavi > li:nth-child(5) > a:nth-child(1)', el => el.click())

  //await page.waitForSelector('table.verticalTable:nth-child(3) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(6) > a:nth-child(1)')
  //await page.$eval('table.verticalTable:nth-child(3) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(6) > a:nth-child(1)', el => el.click())

})()
