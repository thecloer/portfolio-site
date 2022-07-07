export type TColors = 'default' | 'gray' | 'brown' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink';
type TColorTable = {
  [k in TColors]: string;
};

export const colorTable: TColorTable = {
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
