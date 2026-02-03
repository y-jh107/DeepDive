import {
  createContext,
  useContext,
  useReducer,
  useRef,
  useCallback,
  useEffect,
} from "react";
import reducer from "../reducers/postReducer";

const PostContext = createContext(null);

const mockPosts = [
  {
    id: 0,
    title: "졸업논문 지도교수 배정신청",
    isPublished: false,
  },
  {
    id: 1,
    title: "장학금 안내",
    isPublished: false,
  },
  {
    id: 2,
    title: "수강신청 날짜 공지",
    isPublished: false,
  },
];

export function PostProvider({ children }) {
  const [posts, dispatch] = useReducer(reducer, mockPosts);
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        title: content,
        isPublished: false,
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  const onReset = useCallback(() => {
    if (window.confirm("초기화 하시겠습니까?")) {
      dispatch({
        type: "RESET",
      });
    }
  }, []);

  useEffect(() => {
    console.log("AdminPage mounted");
  }, []);

  useEffect(() => {
    console.log("Posts updated");
  }, [posts]);

  useEffect(() => {
    // 클린업, 정리함수
    return () => {
      console.log("AdminPage unmounted");
    };
  }, []);

  return (
    <PostContext.Provider
      value={{ posts, onCreate, onUpdate, onDelete, onReset }}
    >
      {children}
    </PostContext.Provider>
  );
}

export function usePost() {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePost는 PostProvider 내부에서만 사용할 수 있습니다.");
  }
  return context;
}
