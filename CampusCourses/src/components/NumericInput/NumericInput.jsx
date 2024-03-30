import React from 'react';
import { Input } from 'antd';

const NumericInput = ({ value, onChange }) => {
    const handleChange = (e) => {
        const { value: inputValue } = e.target;
        const reg = /^\d*$/;
        if (reg.test(inputValue)) {
            onChange(inputValue);
        }
    };

    return (
        <Input
            value={value}
            onChange={handleChange}
            placeholder="Введите число"
            maxLength={16}
        />
    );
};

export default NumericInput;
