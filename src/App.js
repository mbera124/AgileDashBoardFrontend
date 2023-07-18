import "./App.css";
import Home from "./views/Home/home";
import { Route, Routes } from "react-router-dom";
import About from "./views/Home/about";
import Contact from "./views/Home/contact";
import Navigation from "./views/navigation/navigation";
import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={200} className="site-layout-background">
        <Navigation />
      </Sider>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Layout>
  );
}

export default App;
