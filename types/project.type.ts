import { NotionCover, NotionPropertyTag, NotionPropertyText, NotionPropertyTitle, NotionPropertyUrl, Tag } from './notion.type';

export interface IProjectProperties {
  name: NotionPropertyTitle;
  description: NotionPropertyText;
  tag: NotionPropertyTag;
  github: NotionPropertyUrl;
  npm: NotionPropertyUrl;
  blog: NotionPropertyUrl;
}

export interface IProjectRaw {
  id: string;
  created_time: string;
  last_edited_time: string;
  cover: NotionCover;
  properties: IProjectProperties;
}

export interface IProject {
  id: string;
  created_time: string;
  last_edited_time: string;
  coverUrl: string | null;
  properties: {
    name: string;
    description: string;
    tag: Tag[];
    github: string | null;
    npm: string | null;
    blog: string | null;
  };
}
