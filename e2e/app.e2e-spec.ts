import { HitsTestPage } from './app.po';

describe('hits-test App', () => {
  let page: HitsTestPage;

  beforeEach(() => {
    page = new HitsTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
