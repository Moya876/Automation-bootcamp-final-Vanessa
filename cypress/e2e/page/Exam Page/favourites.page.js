class Favourite {

    //#region Selectors

    get favouriteHeader() { return ('#top-favorite') }
    get addToFavProdPage() { return ('#category') }
    get addToFavOnProdBtn() { return ('#add-to-favorite')}
    get addToCartBtn() {return ('#add-to-cart')}

    get cartContent() {return ('.snipcart-cart__content')}
    get continueShopBtn() {return ('.snipcart-modal__close-title')}

    get firstProd() {return ('#product-0')}
    get secondProd() {return ('#product-1')}
    get thirdProd() {return ('#product-3')}
    get homeBtn() { return ('#top-home')}

    get removeFromFavBtn() {return ('#remove-favorite-btn')}
    get addToFavSuccessMsg() {return ('ul#chakra-toast-manager-top-right')}
    get addToFavRemoveMsg() {return ('ul#chakra-toast-manager-top-right')}
    get noFavAddedMsg() {return ("//h2[text()='No favorites added!']")}
    get favoritesTitle() {return ("//h2[text()='Favorites']")}

    //#endregion

    //#region Methods
    favHeader() {
        cy.get(this.favouriteHeader).should('be.visible')
        cy.get(this.favouriteHeader).click() 
    }


    addToFavProdPage() {
        cy.get(this.firstProd).click()
        cy.get(this.addToFavOnProdBtn).click()
        
    }

   removeFromFav() {
    cy.get(this.favouriteHeader).should('be.visible')
    cy.get(this.favouriteHeader).click()
    cy.get(this.removeFromFavBtn).should('be.visible')
    cy.get(this.removeFromFavBtn).click()

    }
    addMultipleFavProdPage() {
        cy.get(this.firstProd).click()
        cy.get(this.addToFavOnProdBtn).click()
        cy.get(this.homeBtn).click({force: true})
        cy.get(this.secondProd).click()
        cy.get(this.addToFavOnProdBtn).click()
        cy.get(this.homeBtn).click({force:true})
        cy.get(this.thirdProd).click()
        cy.get(this.addToFavOnProdBtn).click({force: true})
        cy.get(this.homeBtn).click({force:true})

    }


    
    //#endregion
}
export default new Favourite()