import { KrutiAiPage } from './app.po';

describe('kruti-ai App', () => {
  let page: KrutiAiPage;

  beforeEach(() => {
    page = new KrutiAiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
