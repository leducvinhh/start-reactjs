import React from 'react';
import AlbumList from './components/AlbumList';

const AlbumFeature = () => {
    const albumList = [
        {
            id: 1,
            name: 'Top 100 Hit Music Young',
            thumbnail:
                'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/6/8/8/3/68834b8395b544f51bc4f2e5505f895f.jpg',
        },
        {
            id: 2,
            name: 'Top 100 Hit lyrical music',
            thumbnail:
                'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/f/9/8/7/f987690e18af09d221abd9c0aab7a44d.jpg',
        },
        {
            id: 3,
            name: 'Top 100 Hit Pop US-UK',
            thumbnail:
                'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/5/4/7/95473f42319ac6c5e4934ea446534a86.jpg',
        },
        {
            id: 4,
            name: 'Top 100 Hit Music K-Pop',
            thumbnail:
                'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/3/0/5/4/3054142743e7126f44a54ba61a72a68a.jpg',
        },
        {
            id: 5,
            name: 'Top 100 Hit EDM',
            thumbnail:
                'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/5/f/c/c5fc615c43215c6b72676f42767855ee.jpg',
        },
    ];
    return (
        <div>
            <h4 className="album-list">List Hot Music Jun 2021</h4>
            <AlbumList albumList={albumList} />
        </div>
    );
};

export default AlbumFeature;
