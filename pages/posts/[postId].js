export const getStaticPaths = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();

    const paths = data.map((currElement) => {
        return{
            params: {
                postId: currElement.id.toString(),
            }
        }
    })

    return {
        paths,
        fallback : false,
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.postId;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json();

    return{
        props: {
            data,
        },
    }
}

// Functional Program End Here

// JSX Start Here
const SinglePost = ( {data} ) => {
    const {id, title, body} = data;
    return (
        <>
            <div>
                <div>
                    <h5>{id}</h5>
                    <h5>{title}</h5>
                </div>
                <div>
                    <p><strong>{body}</strong></p>
                </div>
            </div>
        </>
    );
};

export default SinglePost;