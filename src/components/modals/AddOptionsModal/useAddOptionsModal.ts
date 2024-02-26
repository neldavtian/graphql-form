import { useEffect, useState } from "react";

export const useAddOptionsModal = (isOpen: boolean) => {
  const [selected, setSelected] = useState<ControllerInputType | null>(null);

  useEffect(() => {
    setSelected(null);
  }, [isOpen]);

  return { selected, setSelected };
};
