import { AddOptionsModal } from "../../../modals";
import { useRelations } from "./useRelations";
import { CustomSelect } from "../../../CustomSelect";

import {RelationsWrapper} from "./styles";


interface Props {
  control: FormControlType;
  errors: FormErrorsType;
  setFormValue: (
    val: ControllerInputType,
    input: "positions" | "relations"
  ) => void;
}

export const Relations = ({
  control,
  errors,
  setFormValue,
}: Props) => {
  const { itemsOptions, isModalOpen, setModalOpen, handleSubmit, options } =
    useRelations({ setFormValue });

  return (
    <>
      <RelationsWrapper>
        <CustomSelect
          label="Relationship to candidate"
          options={options}
          name="relations"
          control={control}
          errors={errors}
          setModalOpen={setModalOpen}
          multiple
        />
      </RelationsWrapper>
      <AddOptionsModal
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        options={itemsOptions}
        label="Add a relationship variant"
        handleSubmit={handleSubmit}
      />
    </>
  );
};
