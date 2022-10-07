import Head from 'next/head'
import Image from 'next/image'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import Hero from '../src/components/Hero'
import MobileHeader from '../src/components/MobileHeader'
import Offer from '../src/components/Offer'
import Pricing from '../src/components/Pricing'
import Reviews from '../src/components/Reviews'
import MainLayout from '../src/layouts/MainLayout'

export default function Test() {
  return (
    <MainLayout>
      {/* <MobileHeader /> */}
      <Header />
      <Footer />
    </MainLayout>
  )
}
