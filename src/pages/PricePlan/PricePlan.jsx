import { PriceCard } from "../../components/index";
import plansPrice from "../../data/pricePlan";
import './PricePlan.scss';

function PricePlan() {
  return (
    <section className="container row">
    { plansPrice.plans.map( (planPrice, index) => {
      return(
        <div className="col" key={`${JSON.stringify(planPrice)}-${index}`}>
          <PriceCard className={planPrice.class} plan={planPrice} features={plansPrice.features}/>
        </div>
      );
    })}
    </section>
  );
}

export default PricePlan