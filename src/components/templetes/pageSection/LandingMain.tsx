import React from 'react'
import HeaderLarge from '../text/HeaderLarge'
import HeaderMedium from '../text/HeaderMedium'
import HeaderSmall from '../text/HeaderSmall'
import ParaghraphMedium from '../paragraph/paragraphMedium'
import ParaghraphSmall from '../paragraph/paragraphSmall'

const LandingMain = () => {
    return (
        <>
            <section className="landing-main bg-primary p-4">
                <div>
                    <div>
                        <HeaderLarge color='red'> HeaderLarge </HeaderLarge>
                        <HeaderMedium color='yellow'> HeaderMedium</HeaderMedium>
                        <HeaderSmall color='green'> HeaderSmall </HeaderSmall>
                        <ParaghraphMedium color='blue'> ParaghraphMedium </ParaghraphMedium>
                        <ParaghraphSmall color='pink'> ParaghraphSmall </ParaghraphSmall>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LandingMain