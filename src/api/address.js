import api from './index';


export function getAddressApi (value) {
    return api.get('/address', {
        params: value
    });
}