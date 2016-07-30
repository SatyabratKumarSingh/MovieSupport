import { MovieSupportPage } from './app.po';

describe('movie-support App', function() {
  let page: MovieSupportPage;

  beforeEach(() => {
    page = new MovieSupportPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
