class ProductSort {

    //#region Selectors

    get selectSortDropDown() { return ('#sort') }
    get selectCatDropDown() { return ('#category') }

    get firstProd() {return ('#product-0')}

    get dellLaptop() {return ('Dell Laptop$1000laptopAdd To Cart')}
    get qlMug() {return ('Quality Mug$15cupAdd To Cart')}

    //#endregion

    //#region Methods
    selectSortAZ() {
        cy.get(this.selectSortDropDown).should('be.visible')
        cy.get(this.selectSortDropDown).select('A to Z') 
    }

    selectSortZA() {
        cy.get(this.selectSortDropDown).should('be.visible')
        cy.get(this.selectSortDropDown).select('Z to A')

    }

    selectSortLow() {
        cy.get(this.selectSortDropDown).should('be.visible')
        cy.get(this.selectSortDropDown).select('Low to high')
    }

    selectSortHigh() {
        cy.get(this.selectSortDropDown).should('be.visible')
        cy.get(this.selectSortDropDown).select('High to low')
        cy.get(this.firstProd).should('have.text', 'Mackbook Pro$2000laptopAdd To Cart')
    }

    selectCatShirts() {
        cy.get(this.selectCatDropDown).should('be.visible')
        cy.get(this.selectCatDropDown).select('Shirts')
        cy.get(this.firstProd).should('have.text', 'Quality Hooded Sweatshirt$50shirtAdd To Cart')
    }

    selectCatPants() {
        cy.get(this.selectCatDropDown).should('be.visible')
        cy.get(this.selectCatDropDown).select('Pants')
        cy.get(this.firstProd).should('have.text', 'Quality Pink Pants$44pantsAdd To Cart')
    }

    selectCatHats() {
        cy.get(this.selectCatDropDown).should('be.visible')
        cy.get(this.selectCatDropDown).select('Hats')
        cy.get(this.firstProd).should('have.text', 'Quality Fitted Hat$30hatAdd To Cart')
    }

    selectCatShoes() {
        cy.get(this.selectCatDropDown).should('be.visible')
        cy.get(this.selectCatDropDown).select('Shoes')
        cy.get(this.firstProd).should('have.text', 'Quality Blue Shoes$20shoesAdd To Cart')
    }

    selectCatSofa() {
        cy.get(this.selectCatDropDown).should('be.visible')
        cy.get(this.selectCatDropDown).select('Couch/Sofa')
        cy.get(this.firstProd).should('have.text', 'Red Couch$320couchAdd To Cart')
    }

    selectCatLaptop() {
        cy.get(this.selectCatDropDown).should('be.visible')
        cy.get(this.selectCatDropDown).select('Laptops')
        cy.get(this.firstProd).should('have.text', 'Mackbook Pro$2000laptopAdd To Cart')
    }
    //#endregion
}
export default new ProductSort()