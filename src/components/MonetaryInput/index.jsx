import React, { useState } from 'react';
import { Input } from 'antd';

export const MonetaryInput = ({ width }) => {

    const [value, setValue] = useState('')

    const handleValueChange = ({ key }) => {
        setValue(key)
    }

        return <Input
                type='number'
                style={{
                    width: 465,
                }}
                prefix="R$"
                defaultValue={value}
                controls
                value={value}
                onChange={e => handleValueChange(e)}
            />
}