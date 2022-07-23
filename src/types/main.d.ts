export type BlockColor = 'red' | 'green' | 'gray' | 'yellow';

export type Humor = {
  day: number;
  year: number;
  color: BlockColor;
  description?: string;
};
