import cardIssuerGrabber from '../validators/card.issuer.grabber';

test.each([
  ['a Visa card number', '4024007102333688', {
    result: true,
    name: 'visa',
  }],
  ['an unknown card number', '372655509591641', {
    result: false,
    name: 'unknown',
  }],

])(('it should be %s'), (_, input, expected) => {
  expect(cardIssuerGrabber(input)).toEqual(expected);
});
