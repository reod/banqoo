import { BanqooPage } from './app.po';

describe('banqoo App', () => {
  let page: BanqooPage;

  beforeEach(() => {
    page = new BanqooPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
