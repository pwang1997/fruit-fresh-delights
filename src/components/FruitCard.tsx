import React from "react";

interface FruitCardProps {
    name: string;
    price : string;
    origin : string;
    image : string;
}

function FruitCard({name, price, origin, image }: FruitCardProps) {
    return(
        <div>
            {name}
            {price}
            {origin}
            {image}
        </div>
    )
}

export default React.memo(FruitCard);