fixture`Book fast blocker in weekly view with several Ressources`
  .page`${config.Tester}`

  .httpAuth({
    username: auth.username,
    password: auth.password,
  })

  .beforeEach(async (t) => {
    await t.maximizeWindow()

    // Login tester
    await login('testen', 'test')
  })

test.meta({ CID: 'C220' })(
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
      // Enter name for blocker
      .typeText(calendarModalSelectors.inputBlockerName, 'Testcafe')
      // Tye Daily and change None to Daily
      .click(calendarModalSelectors.buttonDropdown.nth(3))
      .click(calendarModalSelectors.weeklyRepitition.nth(2))
      // Click on the calendar and change the date
      .typeText(calendarModalSelectors.inputDateField, '2023-09-15', {
        replace: true,
      })
      // Choose color green
      .click(calendarModalSelectors.buttonDropdown.nth(-1))
      .click(calendarModalSelectors.colorBlockerGreen)
      // Choose a new date
      .click(calendarModalSelectors.inputBlockerDateSelector)
      // Enter comment
      .typeText(
        calendarModalSelectors.inputBlockerComment,
        'Comment By Testcafe'
      )
      // Save
      .click(buttonGeneric.withText('Save'))

    await calendarActions.deleteBlockers('green')
    await t.click(calendarSelectors.buttonDailyView)
  }
)

