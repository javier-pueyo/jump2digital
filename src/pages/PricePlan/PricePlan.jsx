import { PriceCard } from "../../components/index";
import plansPrice from "../../data/pricePlan"
import './PricePlan.scss'

function PricePlan() {
  return (
    <section className="container row">
      <div className="col-third">
        <PriceCard className="secondary" plan={plansPrice.plans[0]} features={plansPrice.features}/>
      </div>
      <div className="col-third">
        <PriceCard className="featured" plan={plansPrice.plans[1]} features={plansPrice.features}/>
      </div>
      <div className="col-third">
        <PriceCard className="primary" plan={plansPrice.plans[2]} features={plansPrice.features}/>
      </div>
    </section>
  );
}

export default PricePlan