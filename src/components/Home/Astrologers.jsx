
import ComponentHead from "../ComponentHead"
import AstrologerCard from "../AstrologerCard"
import Slider from "./Slider"


export const astrologers = [
    {
        id: 1,
        name: "Tarot Suman",
        image: "",
        languages: "English, Hindi",
        experience: "3 Years",
        skills: "Tarot Reading",
        rating: 4.85,
        reviews: 265,
        price: 12,
        oldPrice: 45,
        online: false,
    },
    {
        id: 2,
        name: "Astro Riya",
        image: "",
        languages: "Hindi",
        experience: "5 Years",
        skills: "Vedic Astrology",
        rating: 4.9,
        reviews: 312,
        price: 15,
        oldPrice: 50,
        online: true,
    },
    {
        id: 3,
        name: "Astro Riya",
        image: "",
        languages: "Hindi",
        experience: "5 Years",
        skills: "Vedic Astrology",
        rating: 4.9,
        reviews: 312,
        price: 15,
        oldPrice: 50,
        online: true,
    },
    {
        id: 4,
        name: "Astro Riya",
        image: "",
        languages: "Hindi",
        experience: "5 Years",
        skills: "Vedic Astrology",
        rating: 4.9,
        reviews: 312,
        price: 15,
        oldPrice: 50,
        online: true,
    },
]


const Astrologers = () => {

    return (
        <section className="pb-0">
            <div className="container">
                <ComponentHead
                    heading="Top Online Astrologers"
                    title="Connect with our expert astrologers for personalized guidance and insights."
                />

                <div className="relative pt-10">
                    <Slider >
                        {astrologers.map((astro) => (
                            <div key={astro.id} className="px-3">
                                <AstrologerCard astro={astro} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Astrologers
