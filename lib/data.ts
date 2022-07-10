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
  { name: 'AWS EC2', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
  { name: 'Nginx', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
  { name: 'Apache', link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg' },

  // SNS
  { name: 'Instagram', link: '' },
  { name: 'Linked In', link: '' },

  // GIS
  { name: 'QGIS', link: '/logo_qgis.png' },
  { name: 'ArcGIS', link: '' },
] as const;

export type TIconName = typeof ICONS[number]['name'];

// Course
export const courses: TCourse[] = [
  {
    title: 'Spatial Information Programming I',
    description: 'Glossier echo park pug, olf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.',
    semester: '2016B',
    credits: 3,
    grade: 'A+',
    tags: ['C'],
  },
  {
    title: 'Spatial Information Programming II',
    description: 'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave  portland craft beer.',
    semester: '2017A',
    credits: 3,
    grade: 'A0',
    tags: ['C#'],
  },
  {
    title: 'Web Design',
    description: 'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave  portland craft beer.',
    semester: '2017B',
    credits: 2,
    grade: 'B0',
    tags: [],
  },
  {
    title: 'Non-Spatial Database Theory',
    description:
      'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.',
    semester: '2017B',
    credits: 3,
    grade: 'A0',
    tags: ['PostgreSQL', 'C#'],
  },
  {
    title: 'Computer Graphics',
    description:
      'Glossier echo park pug, chdiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.',
    semester: '2017B',
    credits: 3,
    grade: 'A+',
    tags: ['C'],
  },
  {
    title: 'Artificial Intelligence for Everyone',
    description:
      'Glossy sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.',
    semester: '2019 Summer',
    credits: 3,
    grade: 'A+',
    tags: [],
  },

  {
    title: 'Spatial Database',
    description:
      'Glossier echo park pug, church-key sartorial biodiesel vexillonhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.',
    semester: '2020A',
    credits: 3,
    grade: 'A+',
    tags: ['PostgreSQL', 'R'],
  },

  {
    title: 'Advanced statistical Programming',
    description:
      'Glossier echo park pug, church-key sartorial biodiesel vexilologist pop-up snackwave ramps cornhole.l Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.',
    semester: '2021B',
    credits: 3,
    grade: 'A+',
    tags: ['Python'],
  },
  {
    title: 'Spatial Analysis',
    description:
      'Glossier echo park pug, church-kelologist pop-up snackwave ramps cornhole.y sartorial biodiesel vexillolop snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.',
    semester: '2021B',
    credits: 3,
    grade: 'B+',
    tags: ['R'],
  },
  {
    title: 'Photogrammetry',
    description:
      'Glossier echo park pug, church-kelologist pop-up snackwave ramps cornhole.y sartorial biodiesel vexillolop snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.',
    semester: '2021B',
    credits: 3,
    grade: 'A0',
    tags: ['Python'],
  },
  {
    title: 'Applications of Deep Learning in Geoinformatics',
    description:
      'Glossier echo park pug, church-kelologist pop-up snackwave ramps cornhole.y sartorial biodiesel vexillolop snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.',
    semester: '2021B',
    credits: 3,
    grade: 'A0',
    tags: ['Python'],
  },
];
