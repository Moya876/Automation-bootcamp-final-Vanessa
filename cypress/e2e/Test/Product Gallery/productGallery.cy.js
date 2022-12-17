/// <reference types="cypress"/>
import productsPage from "../../page/products.page";

describe('These tests covers the Product Gallery scenarios', () => {
    beforeEach(() => {
        cy.visit("https://ui-automation-camp.vercel.app/products");
    })
    it('Ensure 22 products are on the Product page', () => {
        //Should visit website and ensure that products exist
        //Assert that the site shows 22 products
        cy.get(productsPage.searchResults).should('have.length', 22)
    });

    it('Should not have zero products on Product page', () => {
        //Should visit website and ensure that products exist
        //Assert that the site does not shows 0 products
        cy.get(productsPage.searchResults).should('not.have.length', 0)

    });

    it('Products should have id Add to cart ', () => {
        //Should visit website and ensure that products exist
        //Assert that the site product grid child 2 have add to cart text

        cy.get(productsPage.getProdId(0)).should(($product) => {
            const children = $product.children()
            expect(children).to.have.length(3)
            expect(children.eq(2)).to.have.text('Add To Cart')
        })
    });
    it('Ensure product children  have correct title', () => {
        //Should visit website and ensure that products exist
        //Assert that the site product grid child 1 does not contain Add to cart text
        cy.get(productsPage.getProdId(0)).should(($product) => {
            const children = $product.children()
            //children length should be 3
            expect(children).to.have.length(3)
            expect(children.eq(1)).to.not.have.text('Add To Cart')
        })
    });

})