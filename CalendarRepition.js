import authTest from '../../auth'
import configTestExample from '../../config'
import * as calendarActionsTest from '../shared/test/calendar/test'
import { loginTestExample } from '../shared/actions/test'
import { waitForElementTestExample } from '../shared/actions/test'
import * as calendarSelectorsTestExample from '../test/selectors/calendar/test'
import * as calendarModalSelectorsTest from '../shared/selectors/modals/test'
import { buttonGenericTestExample } from '../shared/selectors/test'
import { tabButtonRefreshTest } from '../shared/selectors/test'

fixture`Book fast blocker in weekly view with several Ressources`
  .page`${config.TestExample}`

  .httpAuth({
    username: auth.username,
    password: auth.password,
  })

  .beforeEach(async (t) => {
    await t.maximizeWindow()

    // Login as Example
    await login('test', 'testexample')
  })

test.meta({ CID: 'C1137' })(
  'Book blocker with several Ressources',
  async (t) => {
    await calendarActions.removeBlocksInTodaysCalendar()
    await t
      // Refresh page
      .click(tabButtonRefresh)
    await waitForElement(calendarSelectors.calendarOpenSpace)
    await t
      // Click in calendar
      .rightClick(calendarSelectors.calendarOpenSpace.nth(2))
      // Choose Blocker
      .click(calendarSelectors.contextMenuItemBlocker)
      .wait(1000)
    await t
      // Click on change selection
      .click(calendarSelectors.changeRessourcesSelection)
      // Click further checkbox
      .click(calendarSelectors.checkboxRessources.nth(3))
    await t
      .click(calendarSelectors.repitition)
      // Enter name for blocker
      .typeText(calendarModalSelectors.inputBlockerName, 'Testcafe Blocker')
      // Choose color green
      .click(calendarModalSelectors.buttonDropdown.nth(-1))
      .click(calendarModalSelectors.colorBlockerGreen)
      // Enter comment
      .typeText(
        calendarModalSelectors.inputBlockerComment,
        'Comment By Testcafe'
      )
      // Save
      .click(buttonGeneric.withText('Save'))

    await calendarActions.deleteBlocker('green')
    await t.click(calendarSelectors.buttonDailyView)
  }
)


