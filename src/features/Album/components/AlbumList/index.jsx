import PropTypes from 'prop-types';
import React from 'react';
import Album from '../Album';
import './style.scss';

AblumList.propTypes = {
    albumList: PropTypes.array.isRequired,
};

function AblumList({ albumList }) {
    return (
        <ul className="album-list">
            {albumList.map(album => (
                <li key={album.id}>
                    <Album album={album} />
                </li>
            ))}
        </ul>
    );
}

export default AblumList;