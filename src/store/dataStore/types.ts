type Data = {
    phoneNumber?: string;
    email?: string;
    nickname?: string;
    name?: string;
    surname?: string;
    advantages?: string;
    checkbox?: boolean;
    radio?: React.ChangeEvent<HTMLInputElement>;
}
export interface IDataState {
    data: Data | null;
    sex:  "man" | "woman" | "Не выбрано";
    loading?: boolean;
    error?: string | null;
}