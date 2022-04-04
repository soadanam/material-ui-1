import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const DynamicDetail = () => {

    let a = useParams();
    console.log('DynamicDetails params:', a.id);

    const [friend, setFriend] = useState({});
    // console.log('Friend State:', friend);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${a.id}`)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, []);

    return (
        <div>
            <h2>ID: {friend.id} </h2>
            <h2>Name: {friend.name}</h2>
            <h3>User Name: {friend.username}</h3>
            <h5>Phone: {friend.phone}</h5>
            <p>Email: {friend.email}</p>

            <h3>Company: {friend.company?.name}</h3>
            <p>Address: Street- {friend.address?.street}, City- {friend.address?.city}</p>

            <Link to='/about/culture/dynamic'>
                <button>Go to All Friends!</button>
            </Link>

        </div>
    );
};

export default DynamicDetail;