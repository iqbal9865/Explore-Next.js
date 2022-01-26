function Users ( {users} ) {
    return (
        <div>
            <h1>List of Users</h1>
            {
                users.map(user => 
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <h5>{user.email}</h5>
                    <hr />
                </div>
                )
            }
        </div>
    )
}
export default Users;


export async function getStaticProps () {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data)

    return {
        props: {
            users: data,
        },
    }
}