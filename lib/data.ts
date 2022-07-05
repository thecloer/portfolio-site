import { TCourse } from '../types/data.type';

// Icons
export const ICONS = [
  // language
  { name: 'Javascript', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Typescript', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'HTML', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Python', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'C', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  { name: 'C#', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  { name: 'R', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg' },

  // Runtime / Framework / library
  { name: 'Node JS', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express JS', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'Nest JS', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg' },
  { name: 'React JS', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next JS', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Tailwind CSS', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },

  // ORM & ODM
  { name: 'TypeORM', link: 'https://raw.githubusercontent.com/typeorm/typeorm/master/resources/logo_big.png' },
  { name: 'Mongoose', link: '/logo_mongoose_small.png' },

  // DB
  { name: 'MySQL', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg' },
  { name: 'Mongo DB', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg' },
  { name: 'PostgreSQL', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg' },

  // DevOps
  { name: 'Github', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Docker', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg' },

  // SNS
  { name: 'Instagram', link: '' },
  { name: 'Linked In', link: '' },
] as const;

// export const ICONS = new Map(
//   Object.entries({
//     // language
//     Javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
//     Typescript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
//     HTML: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
//     CSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
//     Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
//     C: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
//     'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
//     R: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg',

//     // Runtime / Framework / library
//     'Node JS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
//     'Express JS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
//     'Nest JS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg',
//     'React JS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
//     'Next JS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
//     'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',

//     // ORM & ODM
//     TypeORM: 'https://raw.githubusercontent.com/typeorm/typeorm/master/resources/logo_big.png',
//     Mongoose: '/logo_mongoose_small.png',

//     // DB
//     MySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg',
//     'Mongo DB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg',
//     PostgreSQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg',

//     // DevOps
//     Github: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
//     Docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg',

//     // SNS
//     Instagram: '',
//     'Linked In': '',
//   })
// );

export type TIconName = typeof ICONS[number]['name'];

// Course
export const courses: TCourse[] = [
  {
    title: 'Spatial Information Programming I',
    description:
      'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.',
    grade: 'A+',
    tags: [],
  },
  {
    title: 'Spatial Information Programming II',
    description:
      'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.',
    grade: 'A0',
    tags: [],
  },
  {
    title: 'Spatial Database',
    description:
      'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.',
    grade: 'A+',
    tags: [],
  },
  {
    title: 'Non-Spatial Database Theory',
    description:
      'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.',
    grade: 'A0',
    tags: [],
  },
  {
    title: 'Computer Graphics',
    description:
      'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.',
    grade: 'A+',
    tags: [],
  },
  {
    title: 'Artificial Intelligence for Everyone',
    description:
      'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.',
    grade: 'A+',
    tags: [],
  },
  {
    title: 'Advanced statistical Programming',
    description:
      'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.',
    grade: 'A+',
    tags: [],
  },
  {
    title: 'Applications of Deep Learning in Geoinformatics',
    description:
      'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.',
    grade: 'A0',
    tags: [],
  },
];
