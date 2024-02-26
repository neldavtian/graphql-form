import { Button, TextField, Typography } from "@mui/material";
import { Positions, Relations } from "./components";
import { useSignUpForm} from "./useSignUpForm";
import { Controller } from "react-hook-form";

import {Form, FormContent,SelectsContainer, SubmitButtonContainer } from "./styles";

export const SignUpForm = () => {

  const { handleSubmit, onSubmit, setFormValues, errors, control } = useSignUpForm();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        Sign up
      </Typography>
      <FormContent>
        <SelectsContainer>
          <Relations
            setFormValue={setFormValues}
            control={control}
            errors={errors}
          />
          <Positions
            setFormValues={setFormValues}
            control={control}
            errors={errors}
          />
        </SelectsContainer>
        <Controller
          name="name"
          control={control}
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              sx={{ width: 620 }}
              id="name"
              label="Name"
              placeholder="Fill in your name"
              variant="outlined"
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          )}
        />
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              sx={{ width: 620 }}
              id="description"
              placeholder="Write small description of yourself"
              label="Description"
              variant="outlined"
              error={!!errors.description}
              multiline
              helperText={errors.description?.message}
            />
          )}
        />
        <SubmitButtonContainer>
          <Button fullWidth variant="contained" type="submit">
            Sign up
          </Button>
        </SubmitButtonContainer>
      </FormContent>
    </Form>
  );
};
