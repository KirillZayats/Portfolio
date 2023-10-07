
export const setCookies = (name: string, value: string) => {
    let dateSave = new Date();
    dateSave.setHours(dateSave.getHours() + 24);    
    document.cookie = `${name} = ${value}; expires=${dateSave.toUTCString()}`;
}

export const getCookie = (name: string) => {
    let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([.$?*|{}()[]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}