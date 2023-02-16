export const deleteBlockers = async (color) => {
  await openCalendarTab()
  await t
    .rightClick(Selector('div.color-' + color))
    .click(calendarSelectors.iconDeleteAppointment)
    .click(calendarSelectors.buttonAllBlockersInTheSeries)
}
