import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mockFruits from "../../mock/mock_fruits.json";

interface FruitDetailProps {
  name: string;
  price: string | number;
  image_url: string;
}

interface MockDataProps {
  [key: string]: FruitDetailProps[];
}

export default function FruitDetail() {
  const apiKey = "PgMzbqo9AmDXn4wFl9mnxIpohBNuaQ4CtuZk8efN";

  const params = useParams();

  const mockData: MockDataProps = mockFruits;

  const detailFruit: string = params.detail_fruit as string;

  const metaType = params.meta_fruit as
    | "apples"
    | "bananas"
    | "grapes"
    | "berries";

  const [data, setData] = useState<any>(null);

  let [count, setCount] = useState(1);

  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    count = count - 1;
    setCount(count);
  }

  useEffect(() => {
    fetch(
      `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=${detailFruit}&pageSize=1&pageNumber=1`
    )
      .then((response) => response.json())
      .then((data) => {
        const { foods } = data;
        console.log(foods[0]);
        setData(foods[0]);
      })
      .catch((error) => {
        // Handle error
      });
  }, [detailFruit]);

  const handleAddToBasket = useCallback(() => {
    console.log("Add to Basket");

    const basket = localStorage.getItem("basket") ?? "{}";

    const parsedBasket = JSON.parse(basket);

    parsedBasket[detailFruit] = {
      name: detailFruit,
      quality: count,
      price: mockData[metaType].find((item) => item.name === detailFruit)
        ?.price,
      subtotal: (
        count *
        parseFloat(
          mockData[metaType].find((item) => item.name === detailFruit)
            ?.price as string
        )
      ).toFixed(2),
    };

    localStorage.setItem("basket", JSON.stringify(parsedBasket));
  }, [count, detailFruit, metaType, mockData]);

  return (
    <Container style={{ minHeight: "100vh" }}>
      <Typography align="left" gutterBottom={true} variant="h6" paddingLeft={1}>
        {mockData[metaType]
          .find((item) => item.name === detailFruit)
          ?.name.replaceAll("-", " ")}
      </Typography>
      <img
        src={
          mockData[metaType].find((item) => item.name === detailFruit)
            ?.image_url
        }
        alt={mockData[metaType].find((item) => item.name === detailFruit)?.name}
        style={{ height: 100 }}
      />
      <Button onClick={incrementCount}>+</Button>
      {count} lb
      <Button onClick={decrementCount} disabled={count <= 0}>
        -
      </Button>
      SubTotal:{" "}
      {(
        count *
        parseFloat(
          mockData[metaType].find((item) => item.name === detailFruit)
            ?.price as string
        )
      ).toFixed(2)}
      <Button onClick={handleAddToBasket}>Add to Basket</Button>
      <TableContainer component={Paper}>
        <Table sx={{}} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Nutrient</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.foodNutrients.slice(0, 10)?.map((nutrient: any) => (
              <TableRow key={nutrient?.nutrientId}>
                <TableCell component="th" scope="row">
                  {nutrient?.nutrientName}
                </TableCell>
                <TableCell align="right">
                  {nutrient?.nutrientNumber +
                    " " +
                    nutrient?.unitName.toString().toLowerCase()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
