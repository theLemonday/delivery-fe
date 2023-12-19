import { config } from "../../../conf/config";
import { Account } from "../../../models/Account";
import { GetAllWithAuthentication } from "../../../shared/action";

export async function loadAccounts(token: string): Promise<Account[]> {
    const data = await GetAllWithAuthentication<Account>({
        url: `${config.protectedUrl}/accounts`,
        token: token,
    });
    return data;
}

export function deleteAccount(username: string) {
    console.log(`Deleting account ${username}`);
    fetch(`${config.protectedUrl}/account/${username}`, {
        method: "DELETE",
    });
}
