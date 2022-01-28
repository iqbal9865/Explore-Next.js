import Link from 'next/link';
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    console.log(data);
    return{
        props: {
            posts: data,
        },
    }
}
const index = ( {posts} ) => {
    return (
        <>
           <div className="container post-container">
           {
               posts.slice(0,10).map( (post)  => 
                   <div key={post.id} className="single-post">
                       <div className="d-flex my-2">
                           <h5 className="post-id">{post.id}</h5>
                           
                               <h5 className="post-title">{post.title}</h5>
                            
                            <Link href={`/posts/${post.id}`} passHref>
                                <h6 className="post-title">Read More</h6>
                            </Link>
                       </div>
                       <div>
                           <p>
                               <strong>{post.body}</strong>
                           </p>
                       </div>
                   </div>
               )
           }
           </div>
        </>
    );
};

export default index;