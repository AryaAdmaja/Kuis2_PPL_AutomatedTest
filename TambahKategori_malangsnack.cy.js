describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://malangsnack.000webhostapp.com/index.php?page=login');
      cy.get("input[name='email']").type('yudasmalabi@gmail.com');
      cy.get("input[name='password']").type('password').type('{enter}');
      cy.get("button[class='swal-button swal-button--confirm']").type('{enter}');
      cy.visit('https://malangsnack.000webhostapp.com/index.php?page=dashboard&content=category&menu=list');
      cy.visit('https://malangsnack.000webhostapp.com/index.php?page=dashboard&content=category&menu=add');
      cy.get("input[type='text']").type('Biskuit');
      cy.wait(1000);
      cy.get('input[type="file"]').selectFile('cypress/fixtures/image/BISKUIT.jpg');
      cy.wait(1000);
      cy.get("button[class='btn btn-primary light btn-md']").type('{enter}');
      cy.wait(5000);
    });
  }); 
  

  describe('empty spec', () => {
    it('passes', () => {
      cy.visit('https://malangsnack.000webhostapp.com/index.php?page=login');
        cy.get("input[name='email']").type('yudasmalabi@gmail.com');
        cy.get("input[name='password']").type('password').type('{enter}');
        cy.get("button[class='swal-button swal-button--confirm']").type('{enter}');
        cy.visit('https://malangsnack.000webhostapp.com/index.php?page=dashboard&content=category&menu=list');
        cy.visit('https://malangsnack.000webhostapp.com/index.php?page=dashboard&content=category&menu=add');
        cy.get('input[type="file"]').selectFile('cypress/fixtures/image/BISKUIT.jpg');
        cy.wait(3000);
        cy.get("button[class='btn btn-primary light btn-md']").type('{enter}');
        cy.wait(5000);
      });
    });


    describe('empty spec', () => {
      it('passes', () => {
        cy.visit('https://malangsnack.000webhostapp.com/index.php?page=login');
          cy.get("input[name='email']").type('yudasmalabi@gmail.com');
          cy.get("input[name='password']").type('password').type('{enter}');
          cy.get("button[class='swal-button swal-button--confirm']").type('{enter}');
          cy.visit('https://malangsnack.000webhostapp.com/index.php?page=dashboard&content=category&menu=list');
          cy.visit('https://malangsnack.000webhostapp.com/index.php?page=dashboard&content=category&menu=add');
          cy.get("input[type='text']").type('Biskuit');
          cy.wait(1000);
          cy.get('input[type="file"]').selectFile('cypress/fixtures/image/BISKUIT.jfif');
          cy.wait(2000);
          cy.get("button[class='btn btn-primary light btn-md']").type('{enter}');
        });
      });