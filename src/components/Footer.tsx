import HomeIcon from "@mui/icons-material/Home";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Badge, IconButton, styled } from "@mui/material";
import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const FooterContainer = styled("div")(() => ({
  display: "flex",
  rowGap: "8px",
  borderTop: "1px solid rgba(0,0,0,0.1)",
  position: "sticky",
  bottom: 0,
  width: "100%",
  backgroundColor: "whitesmoke",
}));

const FooterItemContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  width: "100%",
  flexDirection: "column",
  fontSize: "10px",
}));

function Footer() {
  const navigate = useNavigate();
  const [cookies] = useCookies([
    "firstName",
    "lastName",
    "phoneNumber",
    "email",
  ]);
  return (
    <FooterContainer>
      <FooterItemContainer>
        <IconButton onClick={(e) => navigate("/")} sx={{ pb: 0 }}>
          <HomeIcon />
        </IconButton>
        Home
      </FooterItemContainer>

      <FooterItemContainer>
        <IconButton onClick={(e) => navigate("/")} sx={{ pb: 0 }}>
          <ManageSearchIcon />
        </IconButton>
        Browse
      </FooterItemContainer>

      <FooterItemContainer>
        <IconButton onClick={(e) => navigate("/basket")} sx={{ pb: 0 }}>
          <Badge
            badgeContent={
              !cookies["email"] ? 0 : Object.keys(JSON.parse(localStorage.getItem("basket") ?? "{}"))
                .length
            }
            color="success"
            overlap="circular"
          >
            <ShoppingBasketIcon />
          </Badge>
        </IconButton>
        Baskets
      </FooterItemContainer>

      <FooterItemContainer>
        <IconButton onClick={(e) => navigate("/account")} sx={{ pb: 0 }}>
          <PersonIcon />
        </IconButton>
        Account
      </FooterItemContainer>
    </FooterContainer>
  );
}

export default React.memo(Footer);
