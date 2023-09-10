import React from "react";

import BannerSelection from "./BannerSelection";
import DealBanner from "./DealBanner";
import Heros from "./Heros";


import { Helmet } from 'react-helmet';
import { data } from "jquery";


const HomePage = () => {
    return (
        <div>
            <Heros></Heros>
            <BannerSelection></BannerSelection>
            <DealBanner></DealBanner>
        </div>
    );
}
export default HomePage;