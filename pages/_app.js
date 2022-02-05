import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'

const APP_ID = process.env.NEXT_PUBLIC_APP_ID
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL

function MyApp({ Component, pageProps }) {
  //Validate env variables present or not
  const isServerInfo = APP_ID && SERVER_URL ? true : false
  if (isServerInfo)
    return (
      <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
        <Component {...pageProps} />
      </MoralisProvider>
    )
  else {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1>Please add environment variables</h1>
      </div>
    )
  }
}

export default MyApp
