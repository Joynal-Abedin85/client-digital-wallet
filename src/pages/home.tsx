import AnalyticsPage from "./analytics";
import HowItWorks from "./compo1";
import Testimonials from "./compo2";
import Features from "./Features";
import StatsPage from "./stat";
import SupportPage from "./support";

const home = () => {
    return (
        <div>
            <Features></Features>
            <HowItWorks></HowItWorks>
            <Testimonials></Testimonials>
            <AnalyticsPage></AnalyticsPage>
            <StatsPage></StatsPage>
            <SupportPage></SupportPage>
        </div>
    );
};

export default home;