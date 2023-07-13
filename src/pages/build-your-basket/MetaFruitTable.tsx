import { Container, Typography, styled } from "@mui/material";
import { useCallback, useEffect } from "react";
import FruitCard from "../../components/FruitCard";
import bundles from "../../mock/bundles.json";
import fruits from "../../mock/fruits.json";
import meta_fruits from "../../mock/meta_fruits.json";

const FruitCardsContainer = styled("div")(() => ({
  display: "flex",
  flexWrap: "wrap",
}));

export default function MetaFruitTable() {
  useEffect(() => {
    console.log({ fruits, bundles, meta_fruits });
  });
  
  const renderFruitCards = useCallback(() => {
    return (
      <FruitCardsContainer>
        {meta_fruits.map((item, idx) => {
          return (
            <div key={idx} style={{ flex: "50%" }}>
              <FruitCard
                META_TYPE={item.META_TYPE}
                image={item.image}
              />
            </div>
          );
        })}
      </FruitCardsContainer>
    );
  }, []);

  return (
    <Container style={{minHeight : "100vh"}}>
      <Typography
      align="left"
      gutterBottom={true}
      variant="h6"
      >
        Top Categories
      </Typography>
      {renderFruitCards()}

      <Typography
      align="left"
      gutterBottom={true}
      variant="h6"
      >
        All Categories
      </Typography>
      {/* {renderFruitCards()}  */}
    </Container>
  );
}