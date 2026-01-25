import AnalyticsPage from "./analytics";
import HowItWorks from "./compo1";
import Testimonials from "./compo2";
import Features from "./Features";

const home = () => {
    return (
        <div>
            <Features></Features>
            <HowItWorks></HowItWorks>
            <Testimonials></Testimonials>
            <AnalyticsPage></AnalyticsPage>
        </div>
    );
};

export default home;