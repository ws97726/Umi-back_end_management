import jsCookie from 'js-cookie';

export default {
    setCookie(name: string, obj: any, time: number) {
        jsCookie.set(name, obj, { expires: time })
    },

    getCookie(name: string) {
        return jsCookie.get(name);
    },

    removeCookie(name: string) {
        jsCookie.remove(name);
    },
}