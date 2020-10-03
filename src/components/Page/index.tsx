import React from "react";
import DefaultOverlayContent from "../DefaultOverlayContent";

import { ModelSection, ModelsWrapper } from "../Model";
import UniqueOverlay from "../Model/UniqueOverlay";

import { Container } from "./styles";

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            "Model Y",
            "Model X",
            "Model 3",
            "Model S",
            "Only $1.49/Watt for Solar on Existing Roofs",
            "Solar for New Roofs",
            "Accessories",
          ].map((modelName) => (
            <ModelSection
              key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description="Order Online for Delivery"
                />
              }
            />
          ))}
        </div>

        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
