import { Autocomplete, TextField } from '@mui/material'
import { customStyle, selectCustomstyle } from './AllInputs';

export const AutoCompletes = ({
    options = [],
    label = 'Label',
    otherStyle,
    onChangeHandler,
    field_id,
    value
}) => {
     const selectedOption = options.find(opt => opt.value === "Dhaka") || null;
  return (
    <Autocomplete
        disablePortal
        options={options}
        // value={options.find(opt => opt.value == value) || null}
        // getOptionLabel={(option) => option.label}
        onChange={(event, newValue) => {
            onChangeHandler(newValue)
        }}
        // filterSelectedOptions
        sx={{...otherStyle, width: '100%'}}
        renderInput={(params) =>
            <TextField
            
            sx={{
                    width: '100%',
                    ...customStyle,
                    ...selectCustomstyle
                }}
            {...params} label={label} />
        }
        className="w-full "
        />
  )
}
