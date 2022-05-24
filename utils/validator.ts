interface IValidator {
  email: (data: string) => boolean;
  password: (data: string) => boolean;
  name: (data: string) => boolean;
  phoneNumber: (data: string) => boolean;
}

class Validator implements IValidator {
  fill(data: string) : boolean {
    return data.length > 0;
  }

  compare(data: string, target: string) : boolean {
    return data === target;
  }

  email(data: string) : boolean {
    const pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return Boolean(data.match(pattern));
  }

  password(data: string) : boolean {
    return data.length >= 8;
  };

  name(data: string) : boolean {
    return data.length > 0;
  };

  phoneNumber(data: string) : boolean {
    const pattern = /[- +()0-9]+/;
    return Boolean(data.match(pattern));
  };
}

export default new Validator();
