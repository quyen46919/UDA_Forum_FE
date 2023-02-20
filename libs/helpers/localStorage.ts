const storage = {
    setValueIntoKey(key: string, value: string) {
        localStorage.setItem(key, value);
    },
    getValueFromKey(key: string) {
        return localStorage.getItem(key);
    },
    setObjectIntoKey(key: string, obj: object) {
        localStorage.setItem(key, JSON.stringify(obj));
    },
    clear() {
        localStorage.clear();
    },
};

export default storage;
