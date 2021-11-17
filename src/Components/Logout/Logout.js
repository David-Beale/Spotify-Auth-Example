import { IconButton } from "@mui/material";
import { useStore } from "../Store/store";
import { Container, StyledLogoutIcon } from "./LogoutStyle";

export default function Logout() {
  const loggedIn = useStore((state) => state.loggedIn);
  const logout = useStore((state) => state.logout);

  if (loggedIn !== true) return null;
  return (
    <Container>
      <IconButton color="success" onClick={logout}>
        <StyledLogoutIcon fontSize="large" />
      </IconButton>
    </Container>
  );
}
