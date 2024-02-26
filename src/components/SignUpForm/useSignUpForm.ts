import { useForm, SubmitHandler } from "react-hook-form";

export const useSignUpForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const setFormValues = (
    values: ControllerInputType,
    inputType: "positions" | "relations"
  ) => {
    if (inputType === "relations") {
      setValue(inputType, [values, ...(getValues("relations") || [])]);
    } else {
      setValue(inputType, values);
    }
  };

  return { handleSubmit, onSubmit,  setFormValues, control, errors, };
};
