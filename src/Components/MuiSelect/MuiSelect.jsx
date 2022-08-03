import React from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

const MuiSelect = ({ value,Val1,Val2,Val3}) => {


    const [values, setValues] = React.useState({
        age: "",
        levels: "",
        currency: ""
    });

    const handleChange2 = (event, name) => {
        setValues({
            ...values,
            [name]: event.target.value
        });

    };


    return (
        <FormControl sx={{ m: 1, minWidth: 80 }} size="small"  >
            <InputLabel id="demo-select-small">{value}</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={values[value]}
                label={value}
                onChange={(event) => handleChange2(event, value)}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>{Val1}</MenuItem>
                <MenuItem value={20}>{Val2}</MenuItem>
                <MenuItem value={30}>{Val3}</MenuItem>
            </Select>
        </FormControl>
    )
}

export default MuiSelect