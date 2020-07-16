import React from 'react';


export default function LineField(props) {
    const { label, children, className1 } = props;

    return (
        <div>
            <label className={className1}>{label}</label>
            {children}
        </div>
    );
}
