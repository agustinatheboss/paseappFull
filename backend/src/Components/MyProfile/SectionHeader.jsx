import React from 'react';
import PrimaryButton from '../Buttons/PrimaryButton';

const SectionHeader = ({ title, buttonText, onClick }) => {
    return (
        <section className="info-section middle-align">
            <h2 className="main-title">{title}</h2>
            <PrimaryButton value={buttonText} onClick={onClick} />
        </section>
    );
};

export default SectionHeader;