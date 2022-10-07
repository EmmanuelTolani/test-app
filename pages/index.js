import Head from 'next/head'
import Image from 'next/image'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import Hero from '../src/components/Hero'
import MobileHeader from '../src/components/MobileHeader'
import Offer from '../src/components/Offer'
import Pricing from '../src/components/Pricing'

import Reviews from '../src/components/Reviews'
import Video from '../src/components/Video'
import MainLayout from '../src/layouts/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      {/* <MobileHeader /> */}
      <Header />
      <Hero />
      <Offer />
      <Reviews />
      <Video />
      <Pricing /> 
      <Footer /> 
    </MainLayout>
  )
}
