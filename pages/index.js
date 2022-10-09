import Head from 'next/head'
import Image from 'next/image'
import Footer from '../src/components/UI/Footer'
import Header from '../src/components/UI/Header'
import Hero from '../src/components/Hero'
import MobileMenu from '../src/components/UI/MobileMenu'
import Offer from '../src/components/Offer'
import Pricing from '../src/components/Pricing'
import Reviews from '../src/components/Reviews'
import Stats from '../src/components/Stats'
import Video from '../src/components/Video'
import MainLayout from '../src/layouts/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      <Header />
      <MobileMenu />
      <Hero />
      <Offer />
      <Reviews />
      <Video />
      <Stats />
      <Pricing /> 
      <Footer /> 
    </MainLayout>
  )
}
