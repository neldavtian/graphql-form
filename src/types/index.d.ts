type ControllerInputType =  ApplicantIndividualCompanyRelation[] | ApplicantIndividualCompanyPosition;

interface Inputs {
    relations: ControllerInputType;
    positions: ControllerInputType;
    description: string;
    name: string;
}

type FormControlType = Control<Inputs, any, Inputs>

type FormErrorsType = FieldErrors<Inputs>