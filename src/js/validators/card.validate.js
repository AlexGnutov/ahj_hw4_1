export default function cardValidate(cardNumber) {
  const reg = new RegExp('\\d{16}');
  if (!cardNumber.match(reg)) {
    return {
      result: 'error',
      message: 'Entry is invalid: card ID must have 16 digits.',
    };
  }
  const controlDigit = parseInt(cardNumber[15], 10);
  const codeData = cardNumber.substring(0, 15);

  let sum = 0;
  for (let i = 13; i > 0; i -= 2) {
    sum += parseInt(codeData[i], 10);
  }

  for (let i = 14; i >= 0; i -= 2) {
    const doubled = parseInt(codeData[i], 10) * 2;
    if (doubled > 9) {
      sum += (doubled % 10) + 1;
    } else {
      sum += doubled;
    }
  }

  if (((10 - (sum % 10)) % 10) !== controlDigit) {
    return {
      result: 'error',
      message: 'Card ID is invalid.',
    };
  }
  return {
    result: 'ok',
    message: 'Card Id successfully verified.',
  };
}
