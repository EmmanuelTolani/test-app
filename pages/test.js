import Head from 'next/head'
import Image from 'next/image'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import Hero from '../src/components/Hero'
import MobileMenu from '../src/components/MobileMenu'
import Offer from '../src/components/Offer'
import Pricing from '../src/components/Pricing'
import Quiz from '../src/components/Quiz/Quiz'
import Reviews from '../src/components/Reviews'
import MainLayout from '../src/layouts/MainLayout'

export default function Test() {
  return (
    <MainLayout>
      <MobileMenu />
      <Header />
      <Quiz />
      <Footer />
    </MainLayout>
  )
}
