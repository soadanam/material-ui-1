import React from 'react';
import { Button, Rating } from '@mui/material';
import { Link } from 'react-router-dom';

const Friends = (props) => {
    // console.log('Props of Friends:', props);
    return (
        <div>
            <h3>Friends!</h3>
            <Button variant="contained">Contained</Button><Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>

            <Rating name="size-small" defaultValue={2} size="small" />
            <Rating name="size-medium" defaultValue={2} />
            <Rating name="size-large" defaultValue={2} size="large" />

            <h2>This is One Friend
                <Link to="/friend/anything1">Details?</Link>
            </h2>
            <h2>This is Another Friend
                <Link to="/friend/anything2">Details?</Link>
            </h2>
            <h2>This is Another one Friend
                <Link to="/friend/anything3">Details?</Link>
            </h2>
        </div>
    );
};

export default Friends;