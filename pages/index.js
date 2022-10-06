import Head from 'next/head'
import Image from 'next/image'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import Hero from '../src/components/Hero'
import MobileHeader from '../src/components/MobileHeader'
import MainLayout from '../src/layouts/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      {/* <MobileHeader /> */}
      <Header />
      <Hero />
      {/* <Footer /> */} 
    </MainLayout>
  )
}
