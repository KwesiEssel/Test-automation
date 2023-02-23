import { Selector, t } from 'testcafe';

fixture('Delete Blockers Test')
  .page('https://www.test.de');

test('Delete blockers with color', async () => {
  const calendarSelectors = {
    iconDeleteAppointment: Selector('.appointment-context-menu').withText('Delete'),
    buttonAllBlockersInTheSeries: Selector('.delete-recurring .delete-recurring-all'),
  };
  
  const openCalendarTab = async () => {
    // open calendar
  };

  const color = 'red';
  
  await openCalendarTab();
  
  await t
    .rightClick(Selector(`div.color-${color}`))
    .click(calendarSelectors.iconDeleteAppointment)
    .click(calendarSelectors.buttonAllBlockersInTheSeries);
});
