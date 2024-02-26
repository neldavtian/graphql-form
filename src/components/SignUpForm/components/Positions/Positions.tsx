import { usePositions } from "./usePositions";
import { AddOptionsModal } from "../../../modals";
import { CustomSelect } from "../../../CustomSelect";

import {PositionsWrapper} from "./styles";

interface Props {
  control: FormControlType;
  errors: FormErrorsType;
  setFormValues: (
    values: ControllerInputType,
    inputType: "positions" | "relations"
  ) => void;
}

export const Positions = ({
  control,
  errors,
  setFormValues,
}: Props) => {
  const { options, setIsOpenModal, itemsOptions, isOpenModal, handleSubmit } =
    usePositions({ setFormValues });

  return (
    <>
      <PositionsWrapper>
        <CustomSelect
          label="Position of interest"
          options={options}
          name="positions"
          control={control}
          errors={errors}
          setModalOpen={setIsOpenModal}
        />
      </PositionsWrapper>
      <AddOptionsModal
        options={itemsOptions}
        isModalOpen={isOpenModal}
        setModalOpen={setIsOpenModal}
        label="Choose a position"
        handleSubmit={handleSubmit}
      />
    </>
  );
};
