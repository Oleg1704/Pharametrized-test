    describe('Test', () => {
    
    const paramTest = ({testData, testData1}) =>
    
          function () {
            cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
            cy.get(':nth-child(3) > nb-card-body > .theme-preview').click();
            cy.get('a.ng-tns-c141-9').click();
            cy.get('.menu-item.ng-tns-c141-11 > .ng-star-inserted').click();
            cy.get('input#inputEmail3').type(`${testData}`);
            cy.get('input#inputPassword3').type(`${testData}`);
          }
    
    it('input email and password', paramTest({testData: 'Hello',testData1: '12345'}));
        
    });