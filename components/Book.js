import React, { useState } from 'react';
import Image from 'next/image';

const Book = (props) => {

    const [borrowed, setBorrowed] = useState(props.checkout);

    return (
        <div id={props.id}>
            <Image src={`/${props.thumb}`} height="151" width="100" alt="book cover"/><br/>
            <strong>{props.title}</strong><br/>
            by<br/>
            <em>{props.author}</em><br/>
            <em>{props.genre}</em>
        </div>
    );
};

export default book;
