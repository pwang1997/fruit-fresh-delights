import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  styled
} from "@mui/material";
import { useCallback } from "react";
import mockOrders from "./mock_orders.json";

const OrderAccordionContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  rowGap: "16px",
}));

export default function OrderAccordion() {
  const renderAccordions = useCallback(() => {
    return mockOrders.map((item, idx) => {
      return (
        <div key={idx}>
          <Accordion
            sx={{
              boxShadow: "2px 2px 2px grey",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ borderBottom: "1px solid grey" }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="h6">{item.bundle}</Typography>
                <Typography align="left">{item.completeDate}</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: "24px",
                paddingTop: 0,
                alignItems: "flex-start",
              }}
            >
              {item.order.map((fruit, idx_) => {
                return (
                  <Typography key={idx_}>
                    {fruit.name + " " + fruit.quantity + "lb"}
                  </Typography>
                );
              })}
              <Box sx={{ display: "flex", flexDirection: "column", borderTop : "1px solid grey", width : "100%" }}>
                <Typography align="left">Subtotal: ${item.subtotal}</Typography>
                <Typography align="left">Status: {item.status}</Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
        </div>
      );
    });
  }, []);

  return (
    <OrderAccordionContainer>{renderAccordions()}</OrderAccordionContainer>
  );
}
