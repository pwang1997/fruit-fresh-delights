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

const PremiumFruitCardsContainer = styled("div")(() => ({
  display: "flex",
  flexWrap: "wrap"
}));

const PremiumTagContainer = styled("div")(() => ({
  transform : "rotate(-45deg)",
  position: "absolute",
  top: "30%",
  left: "30%",
  zIndex : "999",
  fontSize: "24px",
  fontWeight: "bold"
}))

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

  const renderPremiumFruitCards = useCallback(() => {
    return (
      <PremiumFruitCardsContainer>
        {meta_fruits.map((item, idx) => {
          return (
            <div key={idx} style={{ flex: "50%", opacity: "0.4", filter: "alpha(opacity=40)", position : "relative" }}>
              <PremiumTagContainer>Premium Only</PremiumTagContainer>
              <FruitCard
                META_TYPE={item.META_TYPE}
                image={item.image}
              />
            </div>
          );
        })}
      </PremiumFruitCardsContainer>
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
      {renderFruitCards()}
      {renderPremiumFruitCards()}
    </Container>
  );
}