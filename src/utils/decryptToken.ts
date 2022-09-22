export const decryptToken = (token: string): any => {
    return JSON.parse(atob(token.split('.')[1]));
}