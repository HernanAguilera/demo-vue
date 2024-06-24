

class Auth {
    static isAuthenticated(): boolean {
        return localStorage.getItem('token') !== null;
    }

    static login(token: string): void {
        localStorage.setItem('token', token);
    }

    static logout(): void {
        localStorage.removeItem('token');
    }

    static getToken(): string | null {
        return localStorage.getItem('token');
    }

    static setToken(token: string): void {
        localStorage.setItem('token', token);
    }

    static removeToken(): void {
        localStorage.removeItem('token');
    }
}

export default Auth;