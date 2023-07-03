import HomeIcon from "@mui/icons-material/Home";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Badge, IconButton, styled } from "@mui/material";
import React from "react";

const FooterContainer = styled("div")(() => ({
  display: "flex",
  rowGap: "8px",
  borderTop: "1px solid rgba(0,0,0,0.1)",
  position: "sticky",
  bottom: 0,
  width: "100%",
  backgroundColor : "whitesmoke"
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
  return (
    <FooterContainer>
      <FooterItemContainer>
        <IconButton sx={{ pb: 0 }}>
          <HomeIcon />
        </IconButton>
        Home
      </FooterItemContainer>

      <FooterItemContainer>
        <IconButton sx={{ pb: 0 }}>
          <ManageSearchIcon />
        </IconButton>
        Browse
      </FooterItemContainer>

      <FooterItemContainer>
        <IconButton sx={{ pb: 0 }}>
          <Badge badgeContent={1} color="success" overlap="circular">
            <ShoppingBasketIcon />
          </Badge>
        </IconButton>
        Baskets
      </FooterItemContainer>

      <FooterItemContainer>
        <IconButton sx={{ pb: 0 }}>
          <PersonIcon />
        </IconButton>
        Account
      </FooterItemContainer>
    </FooterContainer>
  );
}

export default React.memo(Footer);
