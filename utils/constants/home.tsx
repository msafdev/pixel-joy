import { FcIdea, FcServices, FcCustomerSupport } from "react-icons/fc";

const offerList = [
  {
    icon: <FcServices className="w-12 h-12 text-primary" />,
    title: "Ship Faster",
    description:
      "Build and ship your digital products faster than ever before.",
  },
  {
    icon: <FcIdea className="w-12 h-12 text-primary" />,
    title: "Your Ideas",
    description:
      "Here at Pixel Joy, we value your ideas and will you bring them to life.",
  },
  {
    icon: <FcCustomerSupport className="w-12 h-12 text-primary" />,
    title: "Full Support",
    description:
      "Full control and support for your digital products. We are here to help.",
  },
];

const serviceList = [
  {
    number: "01",
    title: "Web Development",
    text: "Next, React, Astro",
  },
  {
    number: "02",
    title: "UI/UX Design",
    text: "Figma, Sketch",
  },
  {
    number: "03",
    title: "No Code Development",
    text: "Webflow, Framer",
  },
];

export { offerList, serviceList };
