import React, { useState } from 'react';
import { InputNumber, Space } from 'antd';

export const MonetaryInput = () => {

    const [value, setValue] = useState(null);

    function formatCurrency(value) {
        const floatValue = parseFloat(value || 0);
        const formattedValue = floatValue.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });
        return formattedValue;
      }
      

    const handleValueChange = (preco) => {
        if(preco) {
            console.log(preco)
            // Remove non-numeric characters and convert to number
            const numericValue = parseFloat(preco.toString().replace(/[^\d.-]/g, '')) || 0;
            setValue(numericValue);
        }
    };

    return <Space>
        <InputNumber
            prefix=""
            addonBefore="+"
            defaultValue={0}
            controls
            value={value === null ? '' : formatCurrency(value)}
            onChange={(e) => handleValueChange(e)}
        />
    </Space>
}