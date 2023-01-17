export interface Video {
  _id: string;
  caption: string;
  video: {
    asset: {
      _id: string;
      url: string;
    };
  };
  postedBy: {
    image: string;
    username: string;
    _id: string;
  };
  likes: {
    postedBy: {
      _id: string;
      userName: string;
      image: string;
    };
  }[];
  comments: {
    comment: string;
    _key: string;
    postedBy: {
      _ref: string;
    };
  }[];
  userId: string;
}

export interface IUser {
  _id: string;
  _type: string;
  username: string;
  image: string;
}
