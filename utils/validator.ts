class Validator {
  static email(data: string) : boolean {
    const pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return Boolean(data.match(pattern));
  }

  static password(data: string) : boolean {
    return data.length >= 8;
  };

  static phoneNumber(data: string) : boolean {
    const pattern = /[- +()0-9]+/;
    return Boolean(data.match(pattern));
  };
}

export default Validator;
