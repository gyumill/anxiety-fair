export type Card = {
  id: number;
  text: string;
  thoughts?: Thought[];
};

export type Thought = {
  text: string;
  checked: boolean;
};
