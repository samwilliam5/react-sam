import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Fetch from "./pages/Fetch";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Counter from "./components/Counter";

function App() {
  const clientFecth = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <div className="App">
      <QueryClientProvider client={clientFecth}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/fetch" element={<Fetch />}></Route>
          </Routes>
          <Counter/>
        </Router>
      </QueryClientProvider>

    </div>
  );
}

export default App;
