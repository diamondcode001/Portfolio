import React from 'react';
import './WorkCard.css';
import {MdCancel} from 'react-icons/md';

 const WorkHome = () => {
    return (
        <div className = "container">
            <div className = "container_wrapper">
                <div className = " container_card">
                    <div className = " container_cardRow">
                        <div className = " container_cardRowCancel">
                            <MdCancel/>
                        </div>
                    <div className = " container_cardRowAvatar">Avatar</div>
                    </div>
                <div className = "container_cardRowQuote">Those who wish for the death of others;
                    for the good or for the bad, is more evil
                    than those they wish death upon. For others'
                    life is not ours to decide.
                </div>
                <div className = " container_cardRowName">Name</div>
                <div className = " container_cardRowTime">Time</div>
            </div>
            </div>
        </div>
    )
}

export default WorkHome;