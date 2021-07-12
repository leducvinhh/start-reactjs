import axiosClient from './axiosClient';

const productsApi = {
    getAll(params) {
        const url = '/products';
        return axiosClient.get(url, { params });
    },

    get(id) {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },

    add(data) {
        const url = '/products';
        return axiosClient.get(url, data);
    },

    update(data) {
        const url = `/products/${data.id}`;
        return axiosClient.get(url, data);
    },

    remove(id) {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },
};

export default productsApi;
