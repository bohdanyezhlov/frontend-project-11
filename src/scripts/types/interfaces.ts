export interface Feed {
  title: string;
  description: string;
}

export interface FeedWithIdAndUrl extends Feed {
  id: string;
  url: string;
}

export interface Post {
  title: string;
  description: string;
  link: string;
}

export interface PostsWithId extends Post {
  id: string;
}

export interface InitialState {
  form: {
    error: null | string;
  };
  loadingProcess: {
    status: null | string;
    error: null | string;
  };
  feeds: FeedWithIdAndUrl[];
  posts: PostsWithId[];
  ui: {
    posts: {
      visitedIds: Set<string>;
    };
  };
}

export interface Data {
  url: string;
}

export interface ParsingError extends Error {
  isParsingError: boolean;
}
