import { IProject, IProjectRaw } from '../types/project.type';

const options = {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Notion-Version': '2022-02-22',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
  },
  body: JSON.stringify({
    sorts: [{ timestamp: 'last_edited_time', direction: 'descending' }],
    page_size: 100,
  }),
};

export const getProjects = async () => {
  const response = await fetch(`https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID_PROJECTS}/query`, options);
  const { results } = (await response.json()) as { results: IProjectRaw[] };

  const projects = results.reduce((newProjects, aProject) => {
    const {
      id,
      created_time,
      last_edited_time,
      cover,
      properties: { name, description, tag, github, npm, blog },
    } = aProject;

    if (name.title.length < 1 || description.rich_text.length < 1) return newProjects;

    const coverUrl = cover?.type === 'file' ? cover.file.url : cover?.external.url ?? null;

    const project: IProject = {
      id,
      created_time,
      last_edited_time,
      coverUrl,
      properties: {
        name: name.title[0].plain_text,
        description: description.rich_text[0].plain_text,
        tag: tag.multi_select,
        github: github.url,
        npm: npm.url,
        blog: blog.url,
      },
    };
    return [...newProjects, project];
  }, [] as IProject[]);

  return projects;
};
