interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void;

export type { Callback, UserProps };

