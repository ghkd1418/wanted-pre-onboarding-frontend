import { Link, Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <nav>
        <li>
          <Link to="/todo">✏️TodoList</Link>
        </li>
        <li>
          <Link to="/signup">회원가입 하기</Link>
        </li>
        <li>
          <Link to="/signin">로그인 하기</Link>
        </li>
      </nav>
      <Outlet />
    </>
  );
};
