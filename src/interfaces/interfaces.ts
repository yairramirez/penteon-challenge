export interface User {
  name: {
    first: string;
    last: string;
    title: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  email: string;
}
export interface Fact {
  fact: string;
  length: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: object | unknown;
}
