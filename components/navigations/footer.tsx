import { BiArrowToRight } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full h-fit bg-primary text-background flex flex-col justify-center items-center pad-x py-12 md:py-20 lg:py-28">
      <div className="flex flex-col gap-y-6 h-fit lg:flex-row items-center justify-between w-full">
        <h1 className="text-xl md:text-3xl font-medium text-center lg:text-left w-full md:w-2/3">
          Join our newsletter to keep updated with our latest news and offers.
        </h1>
        <div className="w-[2px] h-12 mx-8 bg-transparent hidden lg:block" />
        {/* Newsletter Button */}
        <div className="w-full md:w-1/2 lg:w-1/3 bg-primary/80 flex group mt-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-6 py-2 rounded-s-full font-medium border-0 text-foreground"
          />
          <button className="bg-lime-400 hover:bg-lime-500 rounded-e-full p-3 aspect-square anim">
            <BsArrowRight className="w-6 h-6 text-foreground group-hover:-rotate-45 anim" />
          </button>
        </div>
      </div>

      <div className="w-full h-[2px] bg-background/40 my-6 md:my-12" />

      <div className="flex flex-col md:grid grid-cols-5 gap-6 md:gap-12 w-full">
        {/* Brand */}
        <div className="flex flex-col gap-y-3 col-span-2">
          <h1 className="text-3xl font-semibold">PIXELJOY</h1>
          <p className="text-base lg:w-2/3">
            Serving businesses with delightful digital experiences.
          </p>
        </div>
        {/* Links */}
        <div className="flex flex-col md:flex-row md:justify-end col-span-3 gap-6 md:gap-12">
          <div className="flex flex-col gap-y-4">
            <h2 className="text-xl md:text-lg font-medium">Platform</h2>
            <ul className="flex flex-col gap-y-2">
              <li>Pricing</li>
              <li>Service</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-4">
            <h2 className="text-xl md:text-lg font-medium">Company</h2>
            <ul className="flex flex-col gap-y-2">
              <li>News</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-4">
            <h2 className="text-xl md:text-lg font-medium">Resources</h2>
            <ul className="flex flex-col gap-y-2">
              <li>Reference</li>
              <li>Template</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full h-[2px] bg-background/40 my-6 md:my-12" />

      <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-y-6 lg:gap-y-0">
        <div className="flex flex-col md:flex-row justify-center text-center gap-y-2 gap-x-4 md:gap-x-6">
          <p className="text-base">© 2024 PixelJoy</p>
          <p className="text-base underline">Terms of Service</p>
        </div>
        <div className="flex gap-x-4">
          <p className="text-base font-semibold">Facebook</p>
          <p className="text-base font-semibold">Twitter</p>
          <p className="text-base font-semibold">Instagram</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
