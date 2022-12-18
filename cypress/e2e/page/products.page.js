class Product {

    //region Selectors
    get itemName1() { return ('#product-0') }
    get productId() { return ('#product-') }
    get itemName2() { return ('#product-1') }
    get itemName3() { return ('#product-2') }

    get searchField() { return ('#search') }

    get imageOne() { return ("li[class='thumb']") }
    get imageTwo() { return ("li[class='thumb selected']") }
    get imagePara() { return ("(//p)[4]") }
    get imagePrice() { return ("(//p)[5]") }
    get imageCat() { return ("(//p)[7]") }
    get relProd() { return ('.chakra-image.css-138bbah') }


    get cartBtn() { return ('#add-to-cart') }
    get backToProdBtn() { return ('.chakra-heading.css-18j379d') }
    get checkoutBtn() { return ('button.snipcart-button-primary') }
    get detailedCartBtn() { return ('button.snipcart-button-link') }
    get cartSummaryBtn() { return ('#reset') }
    get cartHeader() { return ('.snipcart-cart-header__options') }
    get contShopBtn() { return ('.snipcart-modal__close-title') }
    get homeBtn() { return ('#top-home') }
    get removeBtn() { return ("button[title='Remove item']") }
    get emptyCart() { return (".snipcart-empty-cart") }
    get backToStoreBtn() { return (".snipcart-base-button__label") }

    get topCartIcon() { return ('#top-cart') }
    get inQtyBtn() { return ("button[title='Increment quantity']") }
    get prodIncreaseBtn() { return ('#product-increase') }
    get decQtyBtn() { return ("button[title='Decrement quantity']") }

    get signOutBtn() { return ('#top-sign-out') }
    get billingInfo() { return ('.snipcart-billing-completed') }

    get searchResults() { return (".chakra-stack[id*='product']") }
    get prodGrid() { return ('.chakra-stack.css-uaqjf') }
    get prodInCart() { return ('.snipcart-item-line__product') }
    get priceCont() { return ('.snipcart-item-quantity') }
    get input() { return ("input[value='1']") }
    get detCat() { return ('.css-1ccau2i') }

    //end region

    //Region Methods
    addToCart() {
        cy.get(this.itemName1).click()
        cy.get(this.cartBtn).should('be.visible')
        cy.get(this.cartBtn).click()
        //cy.get('#top-cart').should('be.visible')
        //cy.get('.snipcart-modal__close-title.snipcart__font--std').should('be.visible')
    }
    // newAddToCart(){
    //     cy.get(this.)
    // }
    removeFrmCart() {
        cy.get(this.itemName1).scrollIntoView()
        cy.get(this.itemName1).click()
        cy.get(this.cartBtn).should('be.visible')
        cy.get(this.cartBtn).click({force: true})
        cy.get('#top-cart').should('be.visible')
        //cy.get('#top-cart').click()
        cy.get(this.removeBtn).should('be.visible')
        //cy.get(this.removeBtn).click()
        cy.get(this.decQtyBtn).click()

    }
    removeItemFrmCart() {
        // cy.get(this.itemName1).scrollIntoView()
        // cy.get(this.itemName1).click()
        cy.get(this.cartBtn).should('be.visible')
        cy.get(this.cartBtn).click({force: true})
        cy.get('#top-cart').should('be.visible')
        //cy.get('#top-cart').click()
        cy.get(this.removeBtn).should('be.visible')
        //cy.get(this.removeBtn).click()
        cy.get(this.decQtyBtn).click()

    }
    addMultiToCart() {
        cy.get(this.itemName1).click()
        cy.get(this.cartBtn).should('be.visible')
        cy.get(this.cartBtn).click()

        //cy.get(this.contShopBtn).click()
        cy.get(this.homeBtn).click({ force: true })
        //cy.get(this.contShopBtn).click()
        cy.get(this.itemName2).click({ force:true })
        cy.get(this.cartBtn).should('be.visible')
        cy.get(this.cartBtn).click()
        cy.get(this.contShopBtn).click()
        cy.get(this.homeBtn).click()
        cy.get(this.itemName3).click()
        cy.get(this.cartBtn).should('be.visible')
        cy.get(this.cartBtn).click()
        cy.get('#top-cart').should('be.visible')
        cy.get('.snipcart-modal__close-title.snipcart__font--std').should('be.visible')
    }

    searchOpt() {
        cy.get(this.searchField).should('be.visible')
        cy.get(this.searchField).type('laptop')

    }
    searchOpt2() {
        cy.get(this.searchField).should('be.visible')
        cy.get(this.searchField).type('Quality Blue Shoes')

    }
    search(value) {
        cy.get(this.searchField).should('be.visible')
        cy.get(this.searchField).type(value)
    }
    imgView() {
        cy.get(this.itemName1).click()
        cy.get(this.imageOne).should('be.visible')
        cy.get(this.imageTwo).click()
        cy.get(this.imageOne).click()
        cy.get(this.imageTwo).click()
        cy.get(".chakra-heading.css-18j379d").should('be.visible')
        cy.get(this.relProd).should('be.visible')
        cy.get(this.relProd).click()
        cy.get(this.imageTwo).click()
        cy.get(this.imageOne).click()
        cy.get(".chakra-heading.css-18j379d").should('be.visible')

    }
    prodInput() {
        cy.get(this.itemName1).click()
        cy.get(this.imageOne).should('be.visible')

    }
    prodCat() {
        cy.get(this.itemName1).click()
        cy.get(this.imageOne).should('be.visible')

    }
    addSingleItem(position) {
        const itemaddtocartbtn = `${this.getProdId(position)} ${this.cartBtn}`
        cy.get(itemaddtocartbtn).click({force: true})
        cy.get(this.cartBtn).should('be.visible')
        cy.get(this.cartBtn).click()
    }
    getProdId(position) {
        return `${this.productId}${position}`

    }
}

export default new Product()