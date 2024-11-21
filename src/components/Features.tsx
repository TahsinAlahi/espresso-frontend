import bg from "../assets/more/10.png";
import iconCoffee from "../assets/icons/1.png";
import iconBadge from "../assets/icons/2.png";
import iconBean from "../assets/icons/3.png";
import iconCup from "../assets/icons/4.png";

const featureArr = [
  {
    icon: iconCoffee,
    title: "Quality Coffee",
    discreption:
      "You will definitely be a fan of the design & aroma of your coffee",
  },
  {
    icon: iconBadge,
    title: "High Quality",
    discreption: "We served the coffee to you maintaining the best quality",
  },
  {
    icon: iconBean,
    title: "Pure Grades",
    discreption:
      "The coffee is made of the green coffee beans which you will love",
  },
  {
    icon: iconCup,
    title: "Proper Roasting",
    discreption:
      "Your coffee is brewed by first roasting the green coffee beans",
  },
];

function Features() {
  return (
    <div className=" w-full py-10" style={{ backgroundImage: `url(${bg})` }}>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 md:max-w-screen-lg w-4/5 lg:w-full mx-auto">
        {featureArr.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
    </div>
  );
}

function FeatureCard({
  feature,
}: {
  feature: { icon: string; title: string; discreption: string };
}) {
  return (
    <div className="space-y-2">
      <img src={feature.icon} className="w-18" />
      <h1 className="font-rancho text-3xl">{feature.title}</h1>
      <p className="font-raleway">{feature.discreption}</p>
    </div>
  );
}

export default Features;
