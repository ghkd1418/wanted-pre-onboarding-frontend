import { Route, Routes } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Todo } from "./pages/Todo";
import { TodoDetail } from "./pages/TodoDetail";
import { AuthForm } from "./component/views/AuthForm";

function App() {
  return (
    <div className="App">
      <AuthForm />
      {/* <Routes>
        <Route path="/todo" element={<Todo />}>
          <Route path=":id" element={<TodoDetail />} />
        </Route>
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/signin" element={<SignIn />} />
      </Routes> */}
    </div>
  );
}

export default App;
