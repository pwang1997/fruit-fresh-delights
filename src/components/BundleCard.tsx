import React from "react";

interface BundleCardProps {
    name: string;
    price : string;
    origin : string;
    image : string;
}

function BundleCard({name, price, origin, image }: BundleCardProps) {
    return(
        <div>
            {name}
            {price}
            {origin}
            {image}
        </div>
    )
}

export default React.memo(BundleCard);