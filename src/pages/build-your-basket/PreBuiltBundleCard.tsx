import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from "@mui/material";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import mockBundle from "./mock_default_bundles.json";

const FruitCardContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  justifyContent: "center",
  border: "1px solid rgba(0,0,0,0.25)",
  borderRadius: "0.25",
  margin: 8,
}));

function PreBuiltBundleCard({
  bundleName,
  image,
}: {
  bundleName: string;
  image: string;
}) {
  const navigate = useNavigate();

  const handleFruitCardClick = useCallback(() => {
    navigate(`/bundle/${bundleName}`);
  }, [bundleName, navigate]);

  const handleAddToBasket = useCallback((bundleName: string) => {
    console.log("Add to Basket");

    const basket = localStorage.getItem("basket") ?? "{}";

    const parsedBasket = JSON.parse(basket);

    const data = mockBundle.find((bundle) => bundle.name === bundleName);

    data?.order.forEach((fruit) => {
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
  }, []);

  return (
    <FruitCardContainer className="cover">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={handleFruitCardClick}>
          <CardMedia sx={{ height: 140 }} image={image} title={bundleName} />
          <CardContent
            sx={{
              margin: 0,
              padding: "0px !important",
              borderTop: "0.25px solid black",
            }}
          >
            <Typography variant="body2" component="div">
              {bundleName.replaceAll("-", " ")}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Button
          size="small"
          variant="outlined"
          onClick={(e) => handleAddToBasket(bundleName)}
        >
          Add To Basket
        </Button>
      </Card>
    </FruitCardContainer>
  );
}

export default React.memo(PreBuiltBundleCard);
