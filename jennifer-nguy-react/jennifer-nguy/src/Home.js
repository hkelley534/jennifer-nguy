import React from 'react';
import MobileNavigation from './MobileNavigation';
import Introduction from './Introduction';
import Works from './Works';

function Home() {
    return(
        <div>
            <MobileNavigation />
            <Introduction />
            <Works />
        </div>
    )
};

export default Home;