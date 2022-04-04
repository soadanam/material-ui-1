import React, { useEffect, useState } from 'react';
import './DynamicFriends.css';
import { Link, useNavigate } from 'react-router-dom';

const DynamicFriends = () => {

    const navigate = useNavigate();
    // console.log('Navigate:', navigate);
    const handleFriendClick = () => {
        navigate('/home');
    };



    const [friends, setFriends] = useState([]);
    // console.log('friends of state:', friends);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, []);

    return (
        <div>
            {
                friends.map(x => <div key={x.id} className='friend-class'>
                    <h2>Name: {x.name}</h2>
                    <h4>Email: {x.email}</h4>
                    <p>Address: {x.address.street} {x.address.city}</p>
                    <h5>{x.phone}</h5>
                    <h1>{x.id}</h1>

                    {/* most common routing Directly using 'Link' */}
                    <h2>See this friend
                        <Link to={`/about/culture/dynamic/details/${x.id}`} > Details? </Link>
                    </h2>


                    {/* button routing */}
                    <button>
                        <Link to={`/about/culture/dynamic/details/${x.id}`} > Visit Me
                        </Link>
                    </button>
                    {/* if button? second one is good! */}
                    <Link to={`/about/culture/dynamic/details/${x.id}`} >
                        <button>
                            Visit Me
                        </button>
                    </Link>


                    {/* using Handler/function/onClick in a button*/}
                    <button onClick={handleFriendClick}>Or OnClick to HOME!</button>
                    
                    {/* without using function, only HOOK! */}
                    <button onClick={() => navigate('/about')}>To About?</button>


                </div>)
            }
        </div>
    );
};

export default DynamicFriends;