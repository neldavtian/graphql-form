import { Autocomplete, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

import { AddButtonContainer } from "./styles";

interface Props {
  label: string;
  name: string;
  errors: FormErrorsType;
  control: FormControlType;
  options: { name: string; id: string }[];
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  required?: boolean;
  multiple?: boolean;
}

export const CustomSelect = ({
  options,
  label,
  name,
  control,
  errors,
  multiple,
  setModalOpen,
  required = false,
}: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: "This field is required",
      }}
      render={({ field }) => {
        return (
          <Autocomplete
            {...field}
            disablePortal
            options={options}
            id="custom-select"
            multiple={multiple}
            sx={{ width: 300 }}
            value={field.value || []}
            onChange={(_, value) => field.onChange(value)}
            getOptionLabel={(option) => option.name || ""}
            renderInput={(params) => (
              <TextField
                {...params}
                required={required}
                label={label}
                error={!!errors[name]}
                helperText={errors[name]?.message}
              />
            )}
            renderOption={(props, option) => {
              return props.id === "custom-select-option-0" ? (
                <div key={option.id}>
                  <AddButtonContainer>
                    <Button
                      variant="outlined"
                      onClick={() => setModalOpen(true)}
                    >
                      Add new item
                    </Button>
                  </AddButtonContainer>
                  <li {...props}>{option.name}</li>
                </div>
              ) : (
                <li {...props} key={option.id}>
                  {option.name}
                </li>
              );
            }}
            noOptionsText={
              <AddButtonContainer>
                <Button variant="outlined" onClick={() => setModalOpen(true)}>
                  Add new item
                </Button>
              </AddButtonContainer>
            }
          />
        );
      }}
    />
  );
};
