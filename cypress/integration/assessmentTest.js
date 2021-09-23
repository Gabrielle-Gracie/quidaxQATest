/// <reference types= "cypress" />

describe("Assessment Test", function () {
  
    beforeEach(() => 
    {cy.openURL(
    );
    cy.reload()
    cy.get('body').then((body) => {
      if (body.find('div#at-cv-lightbox-message > span').css('exist') ) {
          cy.get('.at-cm-no-button').click()
      }
      else {
        cy.get('#treemenu > :nth-child(1)').should('contain', 'All Examples')
      }
  })
  }
    );
  


    /****Input Form-CheckBox validation****/
    it('Validate single checkbox demo', () => {
      cy.get('#treemenu .tree-branch:nth-of-type(1) .tree-branch:nth-of-type(1) [href="\#"]').click();
      cy.get(':nth-child(3) > :nth-child(1) > ul > :nth-child(2) > a').should('contain', 'Checkbox Demo').click();
      cy.get('#isAgeSelected').click()
      cy.get('#txtAge').should('contain', 'Success - Check box is checked')

  });

  it('Validate Multiple checkbox demo', () => {
    cy.get('#treemenu .tree-branch:nth-of-type(1) .tree-branch:nth-of-type(1) [href="\#"]').should('contain', 'Input Forms').click();
    cy.get('ul#treemenu  ul > li:nth-of-type(1) > ul > li:nth-of-type(2) > a').should('contain', 'Checkbox Demo').click();
    cy.get('#check1').click();
    cy.get('#check1').should('have.value', 'Uncheck All');
    cy.get(':nth-child(5) > label').click()
    cy.get('#check1').should('have.value', 'Check All');

})



/****Alert & Modals-CheckBox validation****/
 it('Validate Single bootstrap modal', () => {
  cy.get('#treemenu > :nth-child(1) > :nth-child(3) > :nth-child(5)').should('contain', 'Alerts & Modals').click();
  cy.get('li:nth-of-type(5) > ul > li:nth-of-type(2) > a').should('contain', 'Bootstrap Modals').click();
  cy.get('div:nth-of-type(1) > .col-md-4.text-left > .panel.panel-default > .panel-body > .btn.btn-primary').click();
  cy.on('window:alert', (text) => {
    expect(text).to.contains('This is the place where the content for the modal dialog displays');
  });
  cy.get('[class] .row:nth-child(2) .modal-footer .btn:nth-of-type(1)').click();
});

it('Validate Multiple bootstrap modal', () => {
  cy.get('#treemenu > :nth-child(1) > :nth-child(3) > :nth-child(5)').click();
  cy.get('li:nth-of-type(5) > ul > li:nth-of-type(2) > a').should('contain', 'Bootstrap Modals').click();
  cy.get('div:nth-of-type(2) > .col-md-4.text-left > .panel.panel-default > .panel-body > .btn.btn-primary').click();
  cy.on('window:alert', (text) => {
    expect(text).to.contains('First Modal');
  });
  cy.get('.modal-body > .btn.btn-primary').click();
  cy.get('[class] .row:nth-child(3) div:nth-child(3) .modal-footer .btn:nth-of-type(1)').click();
  cy.get('#myModal .modal-footer .btn:nth-of-type(1)').click();
})


/****List Box validation****/
it('Validate Data List Filter', () => {
  cy.get('#treemenu .tree-branch:nth-of-type(6) [href="\#"]').click();
  cy.get('li:nth-of-type(6) > ul > li:nth-of-type(3) > a').should('contain', 'Data List Filter').click();
  cy.get('input#input-search').type('Glenn')
})
     });