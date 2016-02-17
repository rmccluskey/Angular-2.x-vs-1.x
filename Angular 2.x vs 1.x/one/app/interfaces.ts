export interface IImageResponse {
    medium: string;
    original: string;
}

export interface IRatingResponse {
    average: number;
}

export interface IShow {
    id: number;
    genres: Array<string>;
    name: string;
    image: IImageResponse;
    rating: IRatingResponse;
    status: string;
    summary: string;
    cast?: ICastResponse;
}

export interface IShowResponse {
    score: number;
    show: IShow;
}

export interface ICastResponse {
    person: any;
    character: ICharacter;
}

export interface ICharacter {
    image: IImageResponse;
    name: string;
}