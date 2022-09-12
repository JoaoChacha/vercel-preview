import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <button>a test</button>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
