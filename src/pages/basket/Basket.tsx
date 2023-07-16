import {
  Button,
  Container,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import BasketItem from "./BasketItem";

const DeliveryInfoContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  rowGap: "8px",
  marginBottom: "8px",
}));

export default function Basket() {
  const basket = JSON.parse(localStorage.getItem("basket") ?? "{}");

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
          quality={item.quality}
        />
      );
    });
  }, [basket]);

  const handleSubscribe = useCallback(() => {
    const subscribe = basket;
    subscribe.address = address;
    subscribe.contact = contact;
    subscribe.deliveryTime = deliveryTime;

    localStorage.setItem("subscribe", JSON.stringify(basket));
    localStorage.removeItem("basket");

    navigate("/account");
  }, [address, basket, contact, deliveryTime, navigate]);

  return (
    <Container style={{ minHeight: "100vh" }}>
      {Object.keys(basket).length === 0 && (
        <Typography variant="h4" align="left">
          Empty Basket
        </Typography>
      )}
      {Object.keys(basket).length > 0 && (
        <>
          <Typography align="left" variant="h5">
            Build your own basket
          </Typography>
          {renderSelectedBasket()}

          <Typography align="right">
            Subtotal: $
            {[...Object.values(basket)]
              .map((item: any) =>
                parseFloat((item.quality * parseFloat(item.price)).toFixed(2))
              )
              .reduce((pre, cur) => cur + pre, 0)}
          </Typography>

          <DeliveryInfoContainer>
            <TextField
              id="custom-name"
              label="Custom Name"
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

          <Button variant="contained" fullWidth onClick={handleSubscribe}>
            Subscribe
          </Button>
        </>
      )}
    </Container>
  );
}
