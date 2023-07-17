import { Box, Container } from "@mui/material";
import mockFruits from "../../mock/mock_fruits.json";
import { MockDataProps } from "../build-your-basket/FruitDetail";

export default function BasketItem({
  type,
  name,
  quantity,
}: {
  type: string;
  name: string;
  quantity: number;
}) {
  const mockData: MockDataProps = mockFruits;

  const metadata = mockData[type].find((item) => item.name === name);

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        paddingBottom: "8px",
        justifyContent: "space-between",
        columnGap: "8px",
      }}
    >
      <div>
        <img src={metadata?.image_url} alt={name} width={50} height={50} />
      </div>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <span>{name}</span>
        {quantity} lbs * ${metadata?.price}
      </Box>
    </Container>
  );
}
