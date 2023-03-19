import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Index.module.scss'
import Link from 'next/link'
import Header from '../ui/organisms/header/header'
import Footer from '../ui/organisms/footer/footer'

export default function Home() {
  return (
    <div className=''>
      <Header />
      <Link href='/'>Главная</Link>
      <Link href='/contacts'>Контакты</Link>
      <Footer />
    </div>
  )
}
