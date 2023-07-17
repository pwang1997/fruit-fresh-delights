import { Button, Card, Container, Typography, styled } from "@mui/material";
import { useCallback, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import mockBundle from "./mock_default_bundles.json";

const FruitCardContainer = styled("div")(() => ({
  border: "1px solid rgba(0,0,0,0.25)",
  borderRadius: "0.25",
  margin: 8,
}));

export default function BundleFruits() {
  const params = useParams();
  const navigate = useNavigate();

  const data = useRef(
    mockBundle.find((bundle) => bundle.name === params.bundleName)
  );

  const handleAddToBasket = useCallback(() => {
    console.log("Add to Basket");

    const basket = localStorage.getItem("basket") ?? "{}";

    const parsedBasket = JSON.parse(basket);

    data.current?.order.forEach((fruit) => {
      if (parsedBasket[fruit.name]) {
        parsedBasket[fruit.name] = {
          type: fruit.type,
          name: fruit.name,
          quality: parsedBasket[fruit.name].quality + fruit.quantity,
          price: fruit.price,
        };
      } else {
        parsedBasket[fruit.name] = {
          type: fruit.type,
          name: fruit.name,
          quality: fruit.quantity,
          price: fruit.price,
        };
      }
    });

    localStorage.setItem("basket", JSON.stringify(parsedBasket));

    navigate("/basket");
  }, [navigate]);

  const renderFruits = useCallback(() => {
    return (
      <>
        <Typography align="left" variant="h5">
            {params.bundleName?.replaceAll("-", " ")}
        </Typography>
        {data.current?.order.map((fruit, idx) => {
          return (
            <FruitCardContainer key={idx}>
              <Card sx={{ maxWidth: 345 }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <img
                    src={fruit.image_url}
                    alt={fruit.name}
                    style={{ height: 100, width: 100 }}
                  />

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignContent: "center",
                      paddingLeft: "8px",
                    }}
                  >
                    <Typography
                      align="left"
                      gutterBottom={true}
                      variant="subtitle1"
                      paddingLeft={1}
                    >
                      {fruit.name}
                    </Typography>

                    <Typography
                      align="left"
                      gutterBottom={true}
                      variant="subtitle1"
                      paddingLeft={1}
                    >
                      Price: ${fruit.price}/lb
                    </Typography>
                  </div>
                </div>
              </Card>
            </FruitCardContainer>
          );
        })}
      </>
    );
  }, [params.bundleName]);

  return (
    <Container style={{ minHeight: "90vh" }}>
      {renderFruits()}
      <Button
        fullWidth
        variant="outlined"
        size="small"
        onClick={handleAddToBasket}
      >
        Add to Basket
      </Button>
    </Container>
  );
}
