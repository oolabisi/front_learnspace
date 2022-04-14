class AdminPage{
    //Set Password

    static LinkFromEmail() {
        cy.url().should('include','/employee/password/setup/id-number')
    }

    static AdminPasswordDetail() {
        cy.get('.123aq').type('Testing@1234')
        cy.get('.123at').type('Testing@1234')
        cy.get('#PrivateSwitchBase-input css-1m9pwf3').check()
    }

    static Submit() {}

    // Admin Log in

    static LoginDetail() {
        let username;
        let password;
        // cy.get('#123asawfa').type(username)
        cy.get('[for="123asawfa"] > .icon-input > .icon-input-div').type(username)
        cy.get('#123asaeaq').type(password)
    }

    // Add a Product

    static ProductDetail() {
        cy.url().should("include","/dashboard/add-product")
        cy.get("#pn").type("Psychological AI")
        cy.get("#pd").type("Psychological AI Psychological AI Psychological AI Psychological AI")
        cy.get("#pt").type("15")
        cy.get("#mi").type("2500000")
        cy.get("#fs").type("25000")
        cy.get("#ir").type("3")
        cy.get("#ld").type("2022-01-31")
        cy.get("#cd").type("2022-02-02")
        cy.contains("Preview").should("be.visible")
        cy.contains("Preview").should("be.visible")
    }
}
export default AdminPage