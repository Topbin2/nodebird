export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "모상빈",
      },
      content: "첫 번째 게시글 #해시태그 #익스프레스",
      Images: [
        {
          src: "https://velog.velcdn.com/images/sangbin2/post/3d195f3d-7e5e-4e53-9879-ef2c97ba8107/image.png",
        },
        {
          src: "https://velog.velcdn.com/images/sangbin2/post/3d195f3d-7e5e-4e53-9879-ef2c97ba8107/image.png",
        },
        {
          src: "https://velog.velcdn.com/images/sangbin2/post/3d195f3d-7e5e-4e53-9879-ef2c97ba8107/image.png",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "다현",
          },
          content: "우와 개정판이 나왔군요~",
        },
        {
          User: {
            nickname: "콩이",
          },
          content: "왈왈왈왈왈왈",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";

export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "더미데이터입니다.",
  User: {
    id: 1,
    nickname: "제로초",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
