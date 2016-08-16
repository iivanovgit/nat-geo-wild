import { NatGeoRc5Page } from './app.po';

describe('nat-geo-rc5 App', function() {
  let page: NatGeoRc5Page;

  beforeEach(() => {
    page = new NatGeoRc5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
