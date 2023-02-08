import auth from '../../auth'
import tabButton from '../../test'
import { login } from '../shared/actions/loginPage'

fixture`Click on the tabs`
  .page`https://www.doctolib.de/sessions/new`

  .httpAuth({
    username: auth.username,
    password: auth.password,
  })

  .beforeEach(async (t) => {
    await t.maximizeWindow()

    // Login as tea, using function from page-model.js
    await login('test', 'testen')
  })

test.page`https://www.doctolib.de/sessions/new`(
  'Click on the tabs',
  async (t) => {
    await t
      // Click on tab 'Startseite'
      .click(tabButton.startseite)
      // wait
      .wait(1000)
    await t
      // Click on tab 'Hilfebereich'
      .click(tabButton.hilfebereich)
      // Click on tab 'meineDokumente'
      .click(tabButton.meineDokumente)
      // Click on tab User
      .click(tabButton.userName)
  }
)
