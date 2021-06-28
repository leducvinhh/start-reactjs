import React from 'react';

const Album = ({ album }) => {
    return (
        <div>
            <div className="album-img">
                <img src={album.thumbnail} alt={album.name} />
            </div>
            <h4 className="album-title">{album.name}</h4>
        </div>
    );
};

export default Album;
