/* type userData = {
    firstName: string,    дописати у зберігати обєкт в локал сторедж
    lastName: string
} */

export const authService = {
    login: async (name: string) => localStorage.setItem('userName' , name),
    getUser: async () => localStorage.getItem('userName'),
    logout: async () => localStorage.removeItem('userName'),
    isAuth: () => !!localStorage.getItem('userName')
}