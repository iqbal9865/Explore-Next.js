import Link from 'next/link'
const Home  = () => {
    return (
        <div>
            <h1>Hello Its is Our Next.Js Home Page</h1>
            <Link href="/blogs">
            Go To Blog Page
            </Link>
            <br />
            <Link href="/product">Go to Product Page</Link>
        </div>
    )
}
export default Home;