import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import * as gtag from '../utils/gtag'

import Head from 'next/head'
import Analytics from '../components/analytics'
import Contact from '../components/contact'
import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <title>Mauricio Ferraz</title>
        <meta
          name="description"
          content="Mauricio Ferraz - Software engineer"
        />
        <meta
          name="keywords"
          content="Mauricio, Ferraz, Mauricio Ferraz, software, frontend, engineer, software engineer, dev, redux, react, next, javascript, typescript"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Portuguese" />
        <meta name="author" content="Mauricio Ferraz" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Contact />

      <Component {...pageProps} />

      <Analytics />
    </>
  )
}

export default MyApp
