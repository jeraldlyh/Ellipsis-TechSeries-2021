import "tailwindcss/tailwind.css"
import { withAuth } from "../hooks/withAuth"
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>ChequeMate</title>
                <link href="https://fonts.googleapis.com/css2?family=Alatsi&display=swap" rel="stylesheet" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default withAuth()(MyApp)
