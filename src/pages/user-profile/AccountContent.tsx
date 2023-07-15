import { Container, Typography } from "@mui/material";
import { useCallback } from "react";
import OrderAccordion from "./OrderAccordion";
import SubscriptionSchedule from "./SubscriptionSchedule";


export default function AccountContent({selectedTab} : {selectedTab:string}) {

    const renderSubscriptions = useCallback(() => {
        if(selectedTab === "Subscriptions") {
            return(
                <SubscriptionSchedule />
            )
        } else {
            return(
                <OrderAccordion />
            )
        }
    }, [selectedTab ]);

    return(
        <Container>
            <Typography align="left" variant="h5">
                {selectedTab}
                </Typography>
            {renderSubscriptions()}
        </Container>
    )
}