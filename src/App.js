//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
//pages
import Login from "./pages/Login";
//import Desktop from "./pages/Desktop";

//

import Routes from "./routes";
function App() {
  const user = useSelector((state) => state.authUser.user);

  if (user.Authorization !== "") {
    return <Routes />;
  }
  return <Login />;
}

export default App;
