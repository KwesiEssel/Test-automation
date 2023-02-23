import { Selector, t } from 'testcafe';

fixture('Cancel Appointments Test')
  .page('https://www.test.de');

test('Cancel appointments for Dr. Tea', async () => {
 
  await t
    .hover(calendarSelectors.fieldResourceColumnHeaderDrTest)
    .click(calendarSelectors.fieldResourceColumnHeaderCancel)
    .click(calendarSelectors.appointmentListCancelAppointment)
    .click(buttonConfirmCancelAppointment)
})
