import HowItWorks from "./compo1";
import Testimonials from "./compo2";
import Features from "./Features";

const home = () => {
    return (
        <div>
            <Features></Features>
            <HowItWorks></HowItWorks>
            <Testimonials></Testimonials>
        </div>
    );
};

export default home;