export interface NotionPropertyTitle {
  title: { plain_text: string }[];
}
export interface NotionPropertyText {
  rich_text: { plain_text: string }[];
}
export interface NotionPropertyTag {
  multi_select: Tag[];
}
export interface Tag {
  id: string;
  name: string;
  color: string;
}
export interface NotionPropertyUrl {
  url: string | null;
}
export type NotionCoverExternal = {
  type: 'external';
  external: { url: string };
};
export type NotionCoverFile = {
  type: 'file';
  file: { url: string };
};
export type NotionCover = NotionCoverFile | NotionCoverExternal | null;
