/// <reference types="cypress"/>
import favouritesPage from "../../page/Exam Page/favourites.page";


describe('These tests covers the wishlist scenarios', () => {
    beforeEach(() => {
        cy.visit('/products');
    })
    it('Should ensure that the favourites header link is working', () => {
        //Should load the site and select the favorite link in header section
        favouritesPage.favHeader()
        //this is the first you are navigating to wishlist assert that you have no products
        cy.get(favouritesPage.favHeader).should('to.not.have.value')
        
    })

    it('Should ensure you can add a product to wishlist', () => {
        //Should load the site and select the first product
        //Add product to wishlist
        favouritesPage.addToFavProdPage()
        //Assert that the product was added to favourite
        cy.get(favouritesPage.addToFavSuccessMsg).should('be.visible')
        //Assert that wishlist is not empty
        cy.get(favouritesPage.favHeader).should('have.value', '')
    })

    it('Should ensure you can remove a product from wishlist', () => {
        //Should load the site and select the first product
        //Add product to wishlist
        favouritesPage.addToFavProdPage()
        //remove product from wishlist
        favouritesPage.removeFromFav()
        //Assert that the product was removed from wishlist
        cy.get(favouritesPage.addToFavRemoveMsg).should('be.visible')
        //assert that there is no product in wishlist
        cy.get(favouritesPage.favHeader).should('to.not.have.value')
        
    })
    it('Should add multiple products to wishlist and expect to see correct amount of products', () => {
        ///Should load the site and add multiple products to wishlist
        favouritesPage.addMultipleFavProdPage()
        //Navigate to favorite link
        favouritesPage.favHeader()
        //3 products were added to wishlist assert that 4 products wasn't added 
        cy.get(favouritesPage.favHeader).should('to.not.have.value', '4')
        

    })
    it('Should ensure you can add a product to cart from the wishlist', () => {
        //Should load the site and select the first product
        //Add product to wishlist
        favouritesPage.addToFavProdPage()
        //Assert that the product was added to favourite
        cy.get(favouritesPage.addToFavSuccessMsg).should('be.visible')
        //Add the product to cart
        cy.get(favouritesPage.addToCartBtn).click()
        //Should load cart page, assert you are seeing cart content
        cy.get(favouritesPage.cartContent).should('be.visible')

    })
    it('Once you add a product to cart from wishlist then remove it from cart you should still have the product in your wishlist', () => {
        //Should load the site and select the first product
        //Add product to wishlist
        favouritesPage.addToFavProdPage()
        //Assert that the product was added to favourite
        cy.get(favouritesPage.addToFavSuccessMsg).should('be.visible')
        //Add the product to cart
        cy.get(favouritesPage.addToCartBtn).click()
        //Should load cart page, assert you are seeing cart content
        cy.get(favouritesPage.cartContent).should('be.visible')
        //Continue to shop then varify item wasnt removed from wishlish
        cy.get(favouritesPage.continueShopBtn).click()
        //Navigate to wishlish and 
        favouritesPage.favHeader()
        //Ensure it still has the product
        cy.get(favouritesPage.favHeader).should('have.value', '')

    })

})
