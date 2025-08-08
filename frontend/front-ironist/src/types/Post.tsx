export type Post = {
  id: string;
  user: string;
  content: string;
  createdAt: string;
  comments: Comment[];
};

export type Comment = {
  id: string;
  user: string;
  content: string;
  createdAt: string;
};
