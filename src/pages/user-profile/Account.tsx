import {
    Box,
    Button,
    Container,
    Divider,
    Typography,
    styled,
} from "@mui/material";
import { useCallback, useState } from "react";
import AccountContent from "./AccountContent";

const UserProfileContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-evenly",
}));

export default function Account() {
  const [selectedTab, setSelectedTab] = useState("Subscriptions");

  const handleClick = useCallback((tab: string) => {
    setSelectedTab(tab);
  }, []);
  return (
    <Container style={{ minHeight: "100vh" }}>
      <UserProfileContainer>
        <Button onClick={() => handleClick("Subscriptions")}>
          <Box
            component="div"
            sx={{
              p: 2,
              border: "1px solid grey",
              borderRadius: "5px",
              width : 120
            //   backgroundColor: "whitesmoke",
            }}
          >
            <Typography sx={{fontSize : "10px"}}>Subscriptions</Typography>
          </Box>
        </Button>

        <Button onClick={() => handleClick("Orders")}>
          <Box
            component="div"
            sx={{
              p: 2,
              border: "1px solid grey",
              borderRadius: "5px",
              width : 120

            //   backgroundColor: "whitesmoke",
            }}
          >
            <Typography sx={{fontSize : "10px"}}>Orders</Typography>
          </Box>
        </Button>
      </UserProfileContainer>
      <Divider />

      <AccountContent selectedTab={selectedTab} />
    </Container>
  );
}
