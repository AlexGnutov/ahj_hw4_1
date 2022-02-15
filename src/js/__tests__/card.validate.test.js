import cardValidate from '../validators/card.validate';

const okSample = {
  result: 'ok',
  message: 'Card Id successfully verified.',
};

const badEntry = {
  result: 'error',
  message: 'Entry is invalid: card ID must have 16 digits.',
};

const validationFailed = {
  result: 'error',
  message: 'Card ID is invalid.',
};

test.each([
  ['a valid card number', '4024007102333688', okSample],
  ['an invalid card number', '4024007102333689', validationFailed],
  ['an invalid card number', '491645348040', badEntry],

])(('it should be %s'), (_, input, expected) => {
  expect(cardValidate(input)).toEqual(expected);
});
