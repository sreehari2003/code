interface Account {
  name: string;
  age: number;
}

type Age = Pick<Account, "age">;

type AgeWithDob = Age & {
  Dob: Date;
};

let user: AgeWithDob = {
  age: 18,
  Dob: new Date(),
};

interface SlackAccount extends Account {
  id: string;
  token: string;
}

type AccountWithNameOnly = Omit<Account, "age">;

type genericReturn<T> = [T, (state: T) => void];

const genericMethod = <T = any>(state: T): genericReturn<T> => {
  let curr = state;

  const setState = (value: T) => {
    curr = value;
  };

  return [curr, setState];
};

const [state, setState] = genericMethod("hello world");

type GetObject<T> = T[keyof T] | undefined;

Object.prototype.getObject = function <T>(
  this: T,
  pick: keyof T
): GetObject<T> {
  if (this[pick] === undefined) return undefined;
  return this[pick];
};

user.getObject("age");
