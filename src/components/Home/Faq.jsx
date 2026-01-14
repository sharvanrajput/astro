import React from 'react'
import ComponentHead from '../ComponentHead'
import Accordions from './Accordion'
const faqData = [
    {
        id: 1,
        que: "What services do your astrologers provide?",
        ans: "Our astrologers offer a range of services including birth chart analysis, horoscope readings, compatibility assessments, and personalized consultations."
    },
    {
        id: 2,
        que: "What services do your astrologers provide?",
        ans: "Our astrologers offer a range of services including birth chart analysis, horoscope readings, compatibility assessments, and personalized consultations."
    },
    {
        id: 3,
        que: "What services do your astrologers provide?",
        ans: "Our astrologers offer a range of services including birth chart analysis, horoscope readings, compatibility assessments, and personalized consultations."
    },
    {
        id: 4,
        que: "What services do your astrologers provide?",
        ans: "Our astrologers offer a range of services including birth chart analysis, horoscope readings, compatibility assessments, and personalized consultations."
    },
    {
        id: 5,
        que: "What services do your astrologers provide?",
        ans: "Our astrologers offer a range of services including birth chart analysis, horoscope readings, compatibility assessments, and personalized consultations."
    },

]
const Faq = () => {
    return (
        <section>
            <div className="container">
                <ComponentHead className="text-start mb-5"
                    heading='Frequently Asked Questions'
                    title=' Find answers to common questions about our astrology services and consultations.'
                />
                {faqData.map(faq => <Accordions {...faq} />)}

            </div>
        </section>
    )
}

export default Faq
