import Link from 'next/link'
import Head from 'next/head'
const Home  = () => {
    return (
        <div>
           <Head>
                <title>Integrate API-NextJS</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />

            </Head>
            <h1 className="text-danger">Hello Its is Our Next.Js Home Page</h1>
            <Link href="/blogs">
            Go To Blog Page
            </Link>
            <br />
            <Link href="/product">Go to Product Page</Link>
        </div>
    )
}
export default Home;