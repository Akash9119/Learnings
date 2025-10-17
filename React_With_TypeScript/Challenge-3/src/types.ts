type Info = {
    id: number;
    name: string;
    email: string;
}


type AdminInformation = Info & {
    role: string;
    lastLogin: Date;
}

export { type Info, type AdminInformation };