import type { CollapseProps } from "antd";
import { Collapse } from "antd";

const text = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium aspernatur earum nesciunt architecto, veritatis sint aliquid? Voluptas iste, praesentium aspernatur vero porro facere nobis velit magnam quasi ullam adipisci perspiciatis.
`;

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "Petunjuk VA di ATM",
    children: 
    <p className="font-normal">{text}</p>,
  },
  {
    key: "2",
    label: "Petunjuk VA di iBanking / Klik BCA",
    children: <p className="font-normal">{text}</p>,
  },
  {
    key: "3",
    label: "Petunjuk VA di mBanking / m-BCA",
    children: <p className="font-normal">{text}</p>,
  },
];

export default function PaymentGuide() {
  return (
    <div className="mt-10">
      <Collapse
        className="text-sm font-semibold"
        ghost
        items={items}
        expandIconPosition={"end"}
      />
    </div>
  );
}
