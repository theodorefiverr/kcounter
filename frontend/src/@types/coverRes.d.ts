export interface CoverRes {
    status:  boolean;
    data:    Data;
    message: string;
}

export interface Data {
    letter: string;
    id: string;
}
