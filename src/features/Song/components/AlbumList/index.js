import React from 'react';
import Album from '../Album';
import './style.scss';

const AlbumList = ({ albumList }) => {
    return (
        <ul className="album">
            {albumList.map((album) => (
                <li key={album.id}>
                    <Album album={album} />
                </li>
            ))}
        </ul>
    );
};

export default AlbumList;
