import "./App.css";

import Logout from "./Components/Logout/Logout";
import Login from "./Components/Login/Login";
import SpotifyComponents from "./Components/SpotifyComponents/SpotifyComponents";
import { Background, Container } from "./AppStyle";

export default function App() {
  return (
    <Container>
      <Background />
      <Login />
      <Logout />
      <SpotifyComponents />
    </Container>
  );
}
