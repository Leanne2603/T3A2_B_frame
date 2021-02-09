describe('Delete a booking', () => {
    it('deletes a booking', () => {
        // Visit the home page
        cy.visit('http://localhost:3000/')

        // Click the admin login button
        cy.get('#b_admin').click()

        // Fill out the form and submit
        cy.get('input[name=username]').type('Larry')
        cy.get('input[name=password]').type('password123')
        cy.get('button[type=submit]').click()
        
        // Visit the admin bookings page
        cy.visit('http://localhost:3000/admin/bookings')

        // Click a delete button to delete a booking
        cy.get('#delete').click()

    })
})