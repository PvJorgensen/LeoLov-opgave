import React from 'react'
import './section_cards.css'
import img1 from '../../assets/LeoLovOnePage/brock-wegner-o4jSaomEvJk-unsplash (1).jpg'
import img2 from '../../assets/LeoLovOnePage/armando-arauz-v_BWg0OnFmk-unsplash (1).jpg'

const Section_cards = () => {
    return (
        <div className='section-cards'>
            <div className="card">
                <img src={img1} alt="Image One" />
                <div className="text">
                    <h2>Intet Problem</h2>
                    <p>
                        Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen.
                        <br />
                        <br />
                        Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!
                    </p>
                </div>
            </div>
            <div className="card">
                <img src={img2} alt="Image One" />
                <div className="text">
                    <h2>Her bor vi</h2>
                    <p>
                        Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen.
                        <br />
                        <br />
                        Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Section_cards
