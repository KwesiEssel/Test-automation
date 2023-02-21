await t
    // click on Ressource Dr. Tea
    .hover(calendarSelectors.fieldResourceColumnHeaderDrTest)
    // Click on Cancel multiple appointments
    .click(calendarSelectors.fieldResourceColumnHeaderCancel)
    // Cancel Appointments
    .click(calendarSelectors.appointmentListCancelAppointment)
    // Confirm Cancelling
    .click(buttonConfirmCancelAppointment)
})
