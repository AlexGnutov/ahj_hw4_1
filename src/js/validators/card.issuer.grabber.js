import { issuers } from '../data/issuers.data';

export default function cardIssuerGrabber(cardNumber) {
  for (const issuer of issuers) {
    for (const codeBand of issuer.codes) {
      const codeLength = codeBand[0].toString().length;
      const code = cardNumber.substring(0, codeLength);
      if (code >= codeBand[0] && code <= codeBand[1]) {
        return {
          result: true,
          name: issuer.name,
        };
      }
    }
  }
  return {
    result: false,
    name: 'unknown',
  };
}
