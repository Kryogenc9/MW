import React from 'react';
import LineField from './LineField';


export default function InputLine(props){
    const {
        label,
        type,
        placeholder,
        required,
        minLength,
        maxLength,
        min,
        max,
        step,
        list,
        onChange,
        name,
        error,
        value,
        className,
        className1
    } = props;



    return (
        <LineField className1={className1} label={label}>
            <input
                type={type}
                placeholder={placeholder}
                minLength={minLength}
                maxLength={maxLength}
                min={min}
                max={max}
                step={step}
                list={list && list.id}
                required={required}
                onChange={(event) => onChange(name, event)}
                value={value}
                className={className} />
            {list &&
            <datalist id={list.id}>
                {list.options.map((option, key) => <option key={key}>{option}</option>)}
            </datalist>
            }
        </LineField>
    );
}
