import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from '../components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'K-Pop Jackpot',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/c/2/2/f/c22f517f6536ace7bd53b52ca1da80dd.jpg',
        },
        {
            id: 2,
            name: 'Happy Time',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/a/f/e/5/afe5b22fbb642a81245653d8312cd053.jpg',
        },
        {
            id: 3,
            name: 'Ruột truyền thống, vỏ hiện đại',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/e/9/7/8/e9789f3aafc3a52f077c12cb3453d1d7.jpg',
        },
    ];

    return (
        <div>
            <h3>Nghe nhạc thật vui</h3>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;