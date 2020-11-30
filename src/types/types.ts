import exp from "constants";

export type PhotosType = {
    small: string | null,
    large: string | null,
}
export type ContactsType = {
    github: string | null,
    facebook: string | null,
    vk: string | null,
    instagram: string | null,
    twitter: string | null,
    youtube: string | null,
    website: string | null,
    mainLink: string | null,
}
export type ProfileType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: boolean,
    fullName: string,
    contacts: ContactsType,
    photos: PhotosType
}
export type PostType = {
    id: number,
    message: string,
    likesCount: number
}
export type UserType = {
    id:number,
    name:string,
    status:string,
    photos:PhotosType
}