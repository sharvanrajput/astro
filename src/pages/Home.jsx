import BannerSlider from '@/components/BannerSlider'
import Astrologers from '@/components/Home/Astrologers'
import Banner from '@/components/Home/banner'
import Counter from '@/components/Home/Counter'
import Faq from '@/components/Home/Faq'
 
import Services from '@/components/Home/Services'
import React from 'react'

const Home = () => {
  return (
    <>
      <Banner />
      <BannerSlider />
      <Services />
      <Counter />
      <Astrologers />
      <Faq />
    </>
  )
}

export default Home