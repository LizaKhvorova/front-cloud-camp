type Data = {
    phoneNumber?: string;
    email?: string;
    nickname?: string;
    name?: string;
    surname?: string;
    // advantages?: [];
    checkboxGroup?: [];
    radio?: React.ChangeEvent<HTMLInputElement>;
}

type Advantages = {
    id: number;
    value: string;
}
export interface IDataState {
    data: Data | null;
    sex:  "man" | "woman" | "Не выбрано";
    loading?: boolean;
    error?: string | null;
    advantages: Advantages[];
}