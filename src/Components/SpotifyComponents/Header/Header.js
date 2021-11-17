import { useEffect, useState } from "react";
import { HeaderContainer } from "./HeaderStyle";
import Search from "./Search/Search";
import SpotifyLogo from "./SpotifyLogo/SpotifyLogo";

export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(true);
  }, [open]);
  return (
    <HeaderContainer open={open}>
      <SpotifyLogo />
      <Search />
    </HeaderContainer>
  );
}
