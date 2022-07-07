import { TIconName } from '../lib/data';

export type TIcon = { name: string; link: string };

export type TGrade = 'A+' | 'A0' | 'B+' | 'B0' | 'C+' | 'C0' | 'F';

export type TCourse = {
  title: string;
  description: string;
  semester: string;
  credits: number;
  grade: TGrade;
  tags: TIconName[];
};
