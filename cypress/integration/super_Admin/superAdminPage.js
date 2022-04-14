class SuperAdminPage {
    //  Login
    static password;
    static username;

    static Login() {
        cy.visit("/login")
    }

    static LoginDetails() {
        // cy.get('#123asawfa').type(username)
        cy.get('[for="123asawfa"] > .icon-input > .icon-input-div').type(this.username)
        cy.get('#123asaeaq').type(this.password)
    }

    static Submit() {
        cy.get('.MuiButton-root').click()
        cy.on("window:alert", alert => {
            expect(alert).to.eq('Welcome Eyimofe')
        })
    }

    //  Inviting Other Admins

    static GoToSettings() {
        // cy.get('.css-102swli').click()
        cy.get('[data-testid="SettingsIcon"]').click()   // {force: true}
        cy.url().should("include", "/dashboard/settings")
    }

    static GoToInviteManager() {
        cy.get('[href="/dashboard/settings/manage-employee"]').click()
        cy.url().should("include", "/dashboard/settings/manage-employee")
    }

    static InviteAdminDetails() {
        cy.get("#tags-standard").type("tempo0@mailpoof.com{enter}")
        cy.get('#demo-simple-select').click()
        cy.get('.MuiPaper-root > .MuiList-root > .Mui-selected').click()
        // cy.get('MuiList-root MuiList-padding MuiMenu-list css-r8u8y9').select("Portfolio Manager")
    }

    static SendInvite() {
        cy.on("window:alert", alert => {
            expect(alert).to.equals("An invite has been sent")
        })
    }

    // Add Product

    static GoToProductPage() {
        cy.get('.MuiButton-root > .MuiTypography-root').click()
            .wait(3000)
    }

    static FillProductDetails() {
        cy.url().should("include", "/dashboard/add-product")
        cy.get("#pn").type("Psychological AI")
        cy.get("#pd").type("Psychological AI Psychological AI Psychological AI Psychological AI")
        cy.get("#pt").type("15")
        cy.get("#mi").type("2500000")
        cy.get("#fs").type("25000")
        cy.get("#ir").type("3")
        cy.get("#ld").type("2022-02-01")
        cy.get("#cd").type("2022-02-04")
    }

    static PreviewProduct() {
        cy.contains("Preview").should("be.visible")
        cy.contains("button", "Preview").click()
    }

    static SubmitProduct() {
        cy.contains("Submit").should("be.visible")
        cy.contains("button", "Submit").click()
    }
}

export default SuperAdminPage