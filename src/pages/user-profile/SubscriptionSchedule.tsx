import { Divider, Typography, styled } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import React from "react";
import mockFutureSubscriptions from "./mock_future_subscriptions.json";


const SubscriptionContainer = styled("div")(() => ({
  display : "flex",
  flexDirection : "column",
  border : "1px solid rgba(0,0,0,0.25)",
  borderRadius : "5px",
  alignItems : "flex-start",
  margin : "8px",
  padding : "8px"
}));

const OrderContainer = styled("div")(() => ({
  display : "flex",
  width : "80%",
  justifyContent : "space-between"
}))

export default function SubscriptionSchedule() {
  return (
    <React.Fragment>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateCalendar", "DateCalendar"]}>
          <DemoItem>
            <DateCalendar defaultValue={dayjs("2022-07-21")} disabled />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>

      <Divider />

      <Typography variant="h5" align="left">Upcoming Orders</Typography>
      {mockFutureSubscriptions.map((subscription, idx) => {
        return (
          <SubscriptionContainer key={idx}>
            <Typography variant="h6">{subscription.bundle}</Typography>
            <Typography>Date: {subscription.completeDate + " " + subscription.status}</Typography>

            {subscription.order.map((item, idx_) => {
              return (
                <OrderContainer key={idx_}>
                  <Typography variant="subtitle2">{item.name}</Typography>
                  <Typography  variant="subtitle2">{item.quantity} lbs</Typography>
                </OrderContainer>
              );
            })}
          </SubscriptionContainer>
        );
      })}
    </React.Fragment>
  );
}
