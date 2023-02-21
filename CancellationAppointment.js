export const appointmentListCancelAppointment = Selector(
  'button.x-btn-text.icon-delete'
)
  .withText('Cancel selected appointments')
  .filterVisible()
export const fieldResourceColumnHeaderCancel = Selector(
  'svg[data-icon="calendar-xmark"]'
).filterVisible()
export const fieldResourceColumnHeaderDrTea = Selector(
  '[class|="ResourceWrapperTest"]'
)
  .withText('Dr. Test')
  .filterVisible()
