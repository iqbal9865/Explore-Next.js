import Link from 'next/link'
const Product = ({productId = 77}) => {
    return (
        <div>
            <h1>Product Page</h1>
            <Link href='/product/1'>
                Product 1
            </Link>
            <br />
            <Link href='/product/2'>
                Product 2
            </Link>
            <br />
            <Link href={`/product/${productId}`}>
                <a>Product {productId}</a>
            </Link>
        </div>
    )
}
export default Product;