import { useQuery } from "@apollo/client";
import { Query } from "../../../../data-loaders/graphql-loaders";
import { GET_POSITIONS } from "../../../../graphql";
import { useState } from "react";
import { ApplicantIndividualCompanyPosition } from "../../../../types/graphql-types";

interface Props {
    setFormValues: (
        val: ControllerInputType,
        input: "positions" | "relations"
    ) => void;
}

export const usePositions = ({ setFormValues }: Props) => {

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [options, setOptions] = useState<ApplicantIndividualCompanyPosition[]>([]);

    const { data } = useQuery<Query>(GET_POSITIONS);
    const itemsOptions = data?.applicantIndividualCompanyPositions?.data ?? [];

    const handleSubmit = (values: ApplicantIndividualCompanyPosition) => {
        setIsOpenModal(false);
        if(!options.includes(values)){
            setOptions((prevState) => [...prevState, values]);
            setFormValues(values, 'positions')
        }
       
    }

    return {
        isOpenModal,
        itemsOptions,
        options,
        setIsOpenModal,
        handleSubmit,
    }
}