import Head from 'next/head'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import MainLayout from '../components/layouts/MainLayout'
import Dashboard from '../components/dashboard/Dashboard'


export default function Home() {
  return (
    <>
      <Head>
        <title>Lucky star</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/logo-icon.png" />
      </Head>
      <main>
        <Dashboard/>
      </main>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
    return (
      <MainLayout>
        {page}
      </MainLayout>
    )
  }