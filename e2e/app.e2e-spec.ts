import { RealEstateListingsPage } from './app.po';

describe('real-estate-listings App', () => {
  let page: RealEstateListingsPage;

  beforeEach(() => {
    page = new RealEstateListingsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
