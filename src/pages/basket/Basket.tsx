import {
  Button,
  Container,
  Divider,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { useCallback, useMemo, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import BasketItem from "./BasketItem";

const DeliveryInfoContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  rowGap: "8px",
  marginBottom: "8px",
}));

export default function Basket() {
  const basket = useMemo(
    () => JSON.parse(localStorage.getItem("basket") ?? "{}"),
    []
  );

  const navigate = useNavigate();

  const [address, setAddress] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("2023-07-21");
  const [contact, setContact] = useState("");

  const renderSelectedBasket = useCallback(() => {
    return [...Object.values(basket)].map((item: any) => {
      return (
        <BasketItem
          key={item?.name}
          type={item.type}
          name={item.name}
          quantity={item.quantity}
        />
      );
    });
  }, [basket]);

  const handleSubscribe = useCallback(() => {
    localStorage.setItem("subscribe", JSON.stringify(basket));
    localStorage.removeItem("basket");

    navigate("/account");
  }, [basket, navigate]);

  const [cookies] = useCookies([
    "firstName",
    "lastName",
    "phoneNumber",
    "email",
  ]);

  return (
    <Container style={{ minHeight: "100vh" }}>
      {(Object.keys(basket).length === 0 || !cookies["email"]) && (
        <>
          <Typography variant="h4" align="left">
            Empty Basket
          </Typography>

          <div
            style={{
              position: "absolute",
              top: "40%",
              left: "25%",
              right: "25%",
            }}
          >
            <Button fullWidth variant="outlined" onClick={(e) => navigate("/")}>
              building your basket
            </Button>
          </div>
        </>
      )}
      {Object.keys(basket).length > 0 && cookies["email"] && (
        <>
          <Typography align="left" variant="h5">
            Build your own basket
          </Typography>
          {renderSelectedBasket()}

          <Divider />
          <Typography align="right">
            Subtotal: $
            {[...Object.values(basket)]
              .map((item: any) =>
                parseFloat((item.quantity * parseFloat(item.price)).toFixed(2))
              )
              .reduce((pre, cur) => cur + pre, 0)
              .toFixed(2)}
          </Typography>

          <DeliveryInfoContainer>
            <TextField
              id="custom-name"
              label="Basket Name"
              variant="outlined"
              // onChange={(e) => setAddress(e.target.value)}
            />

            <TextField
              required
              id="deliery-address"
              label="Delivery Address"
              variant="outlined"
              onChange={(e) => setAddress(e.target.value)}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker label="Delivery Time" />
              </DemoContainer>
            </LocalizationProvider>
            <TextField
              required
              id="contact-info"
              label="Contact Info"
              variant="outlined"
              onChange={(e) => setContact(e.target.value)}
            />
          </DeliveryInfoContainer>

          <div
            style={{ display: "flex", flexDirection: "column", rowGap: "8px" }}
          >
            <Button variant="contained" fullWidth onClick={handleSubscribe}>
              Weekly Subscription
            </Button>
          </div>
        </>
      )}
    </Container>
  );
}
