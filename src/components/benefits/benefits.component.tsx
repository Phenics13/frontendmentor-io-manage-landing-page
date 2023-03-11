import Benefit from "../benefit/benefit.component";
import "./benefits.styles.scss";

export type BenefitT = {
  id: number;
  title: string;
  text: string;
};

const BENEFITS: BenefitT[] = [
  {
    id: 1,
    title: "Track company-wide progress",
    text: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
  },
  {
    id: 2,
    title: "Advanced built-in reports",
    text: "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
  },
  {
    id: 3,
    title: "Everything you need in one place",
    text: "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
  },
];

const Benefits = () => {
  return (
    <div className="container">
      <div className="benefits ">
        <h2 className="benefits--title title">
          What's different about Manage?
        </h2>
        <p className="benefits--text">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
        <div className="benefits--items">
          {BENEFITS.map((benefit, index) => (
            <Benefit key={index} {...benefit} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
