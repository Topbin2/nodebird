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

const ADD_POST_REQUEST = "ADD_POST_REQUEST";
const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

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
    case ADD_POST_REQUEST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    case ADD_POST_FAILURE:
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
