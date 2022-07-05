export type TGrade = 'A+' | 'A0' | 'B+' | 'B0' | 'C+' | 'C0' | 'F';

export type TCourse = {
  title: string;
  description: string;
  tags: string[];
  grade: TGrade;
};

export type TIcon = { name: string; link: string };
