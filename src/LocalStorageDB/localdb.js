const setDataLocalStorage = time => {
    localStorage.setItem('time', time);
}


const getDataLocalStorage = () => {
    return JSON.parse(localStorage.getItem('time'));
}

export { setDataLocalStorage, getDataLocalStorage }