import TitleHeader from "../components/TitleHeader.jsx";
import ReviewTicker from "../components/ReviewTicker.jsx";

const Testimonials = () => (
  <section id="testimonials" className="flex justify-center items-center px-5 mt-10 md:px-10 md:mt-20 bg-black/20 overflow-hidden">
    <div className="w-full">
      <div className="md:px-10 px-5">
        <TitleHeader
          title="What People Say About Me?"
          sub="feedback highlights"
        />
      </div>
      <div className="mt-16">
        <ReviewTicker />
      </div>
    </div>
  </section>
);

export default Testimonials;