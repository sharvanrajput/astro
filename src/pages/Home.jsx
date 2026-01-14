import BannerSlider from '@/components/BannerSlider'
import Banner from '@/components/Home/banner'
import Services from '@/components/Home/Services'
import React from 'react'

const Home = () => {
  return (
    <>
      <Banner />
      <BannerSlider />
      <Services />
    </>
  )
}

export default Home