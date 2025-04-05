class ParamsStore {
    static data;

    static setStore(data) {
        this.data = data;
    }

    static getItem(key) {
        if (key in this.data) {
            return ParamsStore.data[key];
        }
        throw new Error(`The key "${key}" does not exist`);
    }
}

module.exports = {ParamsStore};
