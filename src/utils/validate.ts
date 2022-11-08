function validateEmail(email: string): boolean {
  // eslint-disable-next-line
  const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  return regEmail.test(email);
}

function validatePhone(phone: string): boolean {
  const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/;
  return regPhone.test(phone);
}

function validatePw(pw: string): boolean {
  if (pw.length >= 8) return true;
  return false;
}

export { validateEmail, validatePhone, validatePw };
