export enum AccountStatus {
    UserUnauthorized = 0,
    Admin,
}

export type Account = {
    username?: string;
    email?: string;
    password?: string;
    accountStatus?: AccountStatus;
};

export interface Session {
    token: string;
    account?: Account;
}
