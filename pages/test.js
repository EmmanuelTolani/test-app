import Head from 'next/head'
import Image from 'next/image'
import Footer from '../src/components/UI/Footer'
import Header from '../src/components/UI/Header'
import MobileMenu from '../src/components/UI/MobileMenu'
import MainLayout from '../src/layouts/MainLayout'
import ChooseQuiz from '../src/components/Quiz/ChooseQuiz'

export default function Test() {
  return (
    <MainLayout>
      <MobileMenu />
      <Header />
      <div className='all-quizes'>
        <ChooseQuiz name="General Knowledge" difficulty={"medium"} length={10} link={'/quiz1'} />
        <ChooseQuiz name="NBA Trivia" difficulty={"hard"} length={10} link={'/quiz2'} />
      </div>
      <Footer />
    </MainLayout>
  )
}
