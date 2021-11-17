import { useEffect } from "react";
import {
  Status,
  AccessRequired,
  Button,
  WelcomeButtonsContainer,
} from "./LoginStyle";
import { useLogin } from "./useLogin";
import { spotifyApi } from "../Api/SpotifyApi";
import { useStore } from "../Store/store";
import Dots from "./Dots";

export default function Login() {
  const loggedIn = useStore((state) => state.loggedIn);
  const accessRequired = useStore((state) => state.accessRequired);
  const login = useStore((state) => state.login);
  const logout = useStore((state) => state.logout);

  const [initiateSpotifyLogin, inProgress, error] = useLogin();

  useEffect(() => {
    (async () => {
      const isAuth = await spotifyApi.checkAuthentication();
      if (isAuth) {
        login();
      } else logout();
    })();
  }, [login, logout]);

  if (loggedIn !== false) return null;
  return (
    <WelcomeButtonsContainer>
      <Button onClick={initiateSpotifyLogin}>Login</Button>
      <Status error={error}>
        {inProgress ? (
          <>
            Authenticating <Dots />
          </>
        ) : (
          error && <>Error Logging In</>
        )}
      </Status>
      {accessRequired && (
        <AccessRequired>
          Sorry, your account needs to be manually authorised. Please get in
          touch.
        </AccessRequired>
      )}
    </WelcomeButtonsContainer>
  );
}
