import React from 'react';
import HeaderLarge from '../text/HeaderLarge';
import HeaderMedium from '../text/HeaderMedium';
import HeaderSmall from '../text/HeaderSmall';
import ParaghraphMedium from '../paragraph/paragraphMedium';
import ParaghraphSmall from '../paragraph/paragraphSmall';

const LandingMain = () => {
    return (
        <section className="landing-main bg-primary p-4">
            <div>
                <HeaderLarge
                    color="color-primary"
                    fontSize="text-4xl"
                    padding="pb-2"
                    lineHeight="leading-tight"
                    fontFamily='font-ibmplexserif-bold'
                    textAlign="text-center"
                    
                >
                    HeaderLarge
                </HeaderLarge>

                <HeaderMedium color="text-yellow-500">HeaderMedium</HeaderMedium>
                <HeaderSmall color="text-green-500">HeaderSmall</HeaderSmall>
                <ParaghraphMedium color="text-blue-500">ParaghraphMedium</ParaghraphMedium>
                <ParaghraphSmall color="text-pink-500">ParaghraphSmall</ParaghraphSmall>
            </div>
        </section>
    );
};

export default LandingMain;
