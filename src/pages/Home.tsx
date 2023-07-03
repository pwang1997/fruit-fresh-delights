import { Container, styled } from "@mui/material";
import { useCallback, useEffect } from "react";
import FruitCard from "../components/FruitCard";
import bundles from "../mock/bundles.json";
import fruits from "../mock/fruits.json";

const FruitCardsContainer = styled("div")(() => ({
  display: "flex",
  flexWrap: "wrap",
}));

function Home() {
  useEffect(() => {
    console.log({ fruits, bundles });
  });

  const renderFruitCards = useCallback(() => {
    return (
      <FruitCardsContainer>
        {fruits.map((item, idx) => {
          return (
            <div key={idx} style={{ flex: "50%" }}>
              <FruitCard
                name={item.name}
                price={item.price}
                origin={item.origin}
                image={item.image}
              />
            </div>
          );
        })}
      </FruitCardsContainer>
    );
  }, []);

  return (
    <Container>
      {renderFruitCards()}
      {renderFruitCards()}
    </Container>
  );
}

export default Home;
