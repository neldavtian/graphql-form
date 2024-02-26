import React from "react";
import { Autocomplete, Button, Modal, TextField } from "@mui/material";
import { useAddOptionsModal } from "./useAddOptionsModal";

import { ModalContent, ButtonsContainer } from "./styles";

interface Props {
  label: string;
  isModalOpen: boolean;
  options: ControllerInputType[];
  handleSubmit: (val: ControllerInputType) => void;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddOptionsModal = ({
  label,
  options,
  isModalOpen,
  setModalOpen,
  handleSubmit,
}: Props) => {
  const { selected, setSelected } = useAddOptionsModal(isModalOpen);

  return (
    <Modal
      open={isModalOpen}
      onClose={() => setModalOpen(false)}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <ModalContent>
        <Autocomplete
          disablePortal
          autoHighlight
          id="add-options-modal"
          options={options}
          onChange={(_, val) => setSelected(val)}
          getOptionLabel={(option) => option.name || ""}
          renderInput={(params) => (
            <TextField
              {...params}
              inputProps={{ ...params.inputProps, tabIndex: 1 }}
              label={label}
            />
          )}
          renderOption={(props, option) => (
            <li {...props} key={option.id}>
              {option.name}
            </li>
          )}
        />
        <ButtonsContainer>
          <Button
            variant="contained"
            disabled={!selected}
            onClick={() => {
              selected && handleSubmit(selected);
            }}
          >
            Add
          </Button>
          <Button onClick={() => setModalOpen(false)} variant="outlined">
            Cancel
          </Button>
        </ButtonsContainer>
      </ModalContent>
    </Modal>
  );
};
