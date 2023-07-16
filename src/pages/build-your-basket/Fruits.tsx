import { Button, Card, Container, Typography, styled } from "@mui/material";
import { useCallback, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import mockFruits from "../../mock/mock_fruits.json";

const FruitCardContainer = styled("div")(() => ({
  border: "1px solid rgba(0,0,0,0.25)",
  borderRadius: "0.25",
  margin: 8,
}));

export default function Fruits() {
  const params = useParams();
  const navigate = useNavigate();

  const metaType = params.meta_fruit as
    | "apples"
    | "bananas"
    | "grapes"
    | "berries";

  const data = useRef(mockFruits[metaType]);

  const handleFruitCardClick = useCallback(
    (fruit: string) => {
      navigate(`/fruit-type/${metaType}/${fruit}`);
    },
    [metaType, navigate]
  );

  const handleAddToBasket = useCallback(
    (detailFruit: string, price: string) => {
      console.log("Add to Basket");

      const basket = localStorage.getItem("basket") ?? "{}";

      const parsedBasket = JSON.parse(basket);

      parsedBasket[detailFruit] = {
        type: metaType,
        name: detailFruit,
        quality: 1,
        price: price,
        subtotal: price,
      };

      localStorage.setItem("basket", JSON.stringify(parsedBasket));
    },
    [metaType]
  );

  const renderFruits = useCallback(() => {
    return data.current.map((fruit, idx) => {
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
                onClick={() => handleFruitCardClick(fruit.name)}
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

                <Button
                  fullWidth
                  variant="contained"
                  size="small"
                  onClick={(e) => handleAddToBasket(fruit?.name, fruit?.price)}
                >
                  Add to Basket
                </Button>
              </div>
            </div>
          </Card>
        </FruitCardContainer>
      );
    });
  }, [handleAddToBasket, handleFruitCardClick]);
  return <Container style={{ minHeight: "100vh" }}>{renderFruits()}</Container>;
}
