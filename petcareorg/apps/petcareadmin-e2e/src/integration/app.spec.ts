import { getGreeting } from '../support/app.po';

describe('petcareadmin', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to petcareadmin!');
  });
});
