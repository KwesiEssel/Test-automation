import { Selector, t } from 'testcafe';

fixture('Button Visibility Test')
  .page('https://www.example.com');

test('Button should be visible', async () => {
  const button = Selector('button').withText('Download Excel').filterVisible()
  
  await t.expect(button.exists).ok();
});
