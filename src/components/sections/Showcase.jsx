import React from "react";
import { potfolio } from "../../apis";
import Heading from "../Heading";
import PotfolioCard from "../PotfolioCard";
function Potfolio() {
  return (
    <div>
      <Heading title="showcase" subTitle="my work?" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6">
        {potfolio.map((item) => (
          <PotfolioCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Potfolio;
