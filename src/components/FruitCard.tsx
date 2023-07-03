import { styled } from "@mui/material";
import React from "react";

const FruitCardContainer = styled("div")(() => ({
    padding : "4px",
    border : "1px solid rgba(0,0,0,0.25)",
    width : "150",
    height : 100,
    '& .cover' : {
        objectFit : "cover"
    }
}));

interface FruitCardProps {
    name: string;
    price : number;
    origin : string;
    image : string;
}

function FruitCard({name, price, origin, image }: FruitCardProps) {
    return(
        <FruitCardContainer className="cover">
          <img  src={image} alt={name} style={{width : "100%", height : "100%"}} />
        </FruitCardContainer>
    )
}

export default React.memo(FruitCard);