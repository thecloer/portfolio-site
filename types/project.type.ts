import { NotionCover, NotionPropertyTag, NotionPropertyText, NotionPropertyTitle, NotionPropertyUrl, Tag } from './notion.type';

export type TProjectProperties = {
  name: NotionPropertyTitle;
  description: NotionPropertyText;
  tag: NotionPropertyTag;
  github: NotionPropertyUrl;
  npm: NotionPropertyUrl;
  blog: NotionPropertyUrl;
};

export type TProjectRaw = {
  id: string;
  created_time: string;
  last_edited_time: string;
  cover: NotionCover;
  properties: TProjectProperties;
};

export type TProject = {
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
};

export const linkButtonTypes = {
  github: 'github',
  npm: 'npm',
  blog: 'blog',
} as const;
export type TLinkButtonType = keyof typeof linkButtonTypes;

export type TProjectCardLinkButtonSrc = { type: TLinkButtonType; url: string };
