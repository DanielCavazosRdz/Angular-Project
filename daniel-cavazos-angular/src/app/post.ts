export class Post {
  id: number;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  publishedAt: string;
  image: string;
  comments: [{
    id: number;
    content: string;
    author: string;
  }]
}
