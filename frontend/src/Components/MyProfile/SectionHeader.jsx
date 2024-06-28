import React from 'react';
import PrimaryButton from '../Buttons/PrimaryButton';

const SectionHeader = ({ title, buttonText, onClick }) => {
    return (
        <section className="info-section middle-align">
            <h2 className="main-title">{title}</h2>
            <div className="main-button"><PrimaryButton value={buttonText} onClick={onClick} /></div>
        </section>
    );
};

export default SectionHeader;