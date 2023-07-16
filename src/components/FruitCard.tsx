import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from "@mui/material";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FruitCardContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  justifyContent: "center",
  border: "1px solid rgba(0,0,0,0.25)",
  borderRadius: "0.25",
  margin: 8,
}));

interface FruitCardProps {
  META_TYPE?: string;
  name?: string;
  price?: number;
  origin?: string;
  image?: string;
}

function FruitCard({ META_TYPE, name, price, origin, image }: FruitCardProps) {
  const navigate = useNavigate();

  const handleFruitCardClick = useCallback(() => {
    navigate(`/fruit-type/${META_TYPE}`);
  }, [META_TYPE, navigate]);

  return (
    <FruitCardContainer className="cover">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={handleFruitCardClick}>
          <CardMedia sx={{ height: 140 }} image={image} title={name} />
          <CardContent
            sx={{
              margin: 0,
              padding: "0px !important",
              borderTop: "0.25px solid black",
            }}
          >
            <Typography variant="body2" component="div">
              {META_TYPE}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </FruitCardContainer>
  );
}

export default React.memo(FruitCard);
