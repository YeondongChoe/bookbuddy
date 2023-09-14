import { PageInfo } from './Pagination';

export interface CSType {
  data: {
    id: string;
    title: string;
    content: string;
    memberId: string;
    createdAt: string;
    status: string;
  }[];
  pageInfo: PageInfo;
}

export interface PostCSType {
  title: string;
  content: string;
}

export interface CSDetailType {
  answer: {
    boardId: string;
    content: string;
  };
  question: {
    id: string;
    title: string;
    content: string;
    memberId: string;
  };
}

export interface CSPatchType extends PostCSType {
  boardId: string;
}

export interface PostCSAnswerType {
  content: string;
}
