export class Hit {
  id: number;
  author: string;
  comment_text: string;
  created_at: string;
  created_at_i: number;
  num_comments: Boolean;
  objectID: number;
  parent_id: number;
  points: string;
  story_id: number;
  story_text: string;
  story_title: string;
  story_url: string;
  title: string;
  url: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
