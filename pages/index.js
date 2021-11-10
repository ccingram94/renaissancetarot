import Head from 'next/head'
import Router from 'next/router'
import Header from '../components/header'
import Footer from '../components/footer'
import Hero from '../components/hero'
import { useState } from 'react'

export default function Home({ question, setQuestion }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    Router.push('/threecard');
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Renaissance Tarot</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=IM+Fell+English:ital@0;1&family=Montserrat+Alternates:wght@100;300;600;900&family=Poppins:wght@100;700;900&display=swap" rel="stylesheet" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full min-w-screen flex-1">
        <Header />
        <Hero />
      </main>
      <Footer />
    </div>
  )
}
