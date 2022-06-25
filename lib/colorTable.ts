export type Tcolors = 'default' | 'gray' | 'brown' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink';
type IcolorTable = {
  [k in Tcolors]: string;
};

export const colorTable: IcolorTable = {
  default: '#61A4BC',
  gray: '#CBD5E1',
  brown: '#CE9461',
  red: '#EB5353',
  orange: '#F15412',
  yellow: '#FFC54D',
  green: '#A0D995',
  blue: '#9DD6DF',
  purple: '#A084CF',
  pink: '#FF7396',
};
