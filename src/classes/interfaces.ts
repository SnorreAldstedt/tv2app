export interface MovieLabel {
  text: string;
  type: string;
}

export interface MovieImage {
  src: string;
}

export interface Movie {
  gpid?: string;
  title?: string;
  description?: string;
  image?: MovieImage;
  labels?: MovieLabel[];
}

export interface FeedStylesLayout {
  aspect?: string;
  name?: string;
}

export interface FeedStyles {
  layout?: FeedStylesLayout;
  [key: string]: any;
}

export interface Feed {
  title?: string;
  content: Movie[];
  styles?: FeedStyles;
}
