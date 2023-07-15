import { Box, Container } from "@mui/material";
import mockFruits from "../../mock/mock_fruits.json";
import { MockDataProps } from "../build-your-basket/FruitDetail";

export default function BasketItem({
  type,
  name,
  quality,
}: {
  type: string;
  name: string;
  quality: number;
}) {
  const mockData: MockDataProps = mockFruits;

  const metadata = mockData[type].find((item) => item.name === name);

  return (
    <Container
      sx={{ display: "flex", alignItems: "center", alignContent: "center" }}
    >
      <img src={metadata?.image_url} alt={name} width={50} />
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <span>{name}</span>
        {quality} lbs * ${metadata?.price}
      </Box>
    </Container>
  );
}
