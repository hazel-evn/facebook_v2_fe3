import axios from "axios";

export const createPost = async (
  type,
  backgroud,
  text,
  images,
  user,
  token
) => {
  try {
    const { data } = axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/createPost`,
      {
        type,
        backgroud,
        text,
        images,
        user,
      },
      {
        headers: {
          Authorization: `Bereer  ${token}`,
        },
      }
    );
  } catch (error) {
    return error.response.data.message;
  }
};
