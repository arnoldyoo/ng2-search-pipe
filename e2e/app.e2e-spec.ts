import { SearchPipeExamplePage } from './app.po';

describe('search-pipe-example App', function() {
  let page: SearchPipeExamplePage;

  beforeEach(() => {
    page = new SearchPipeExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
