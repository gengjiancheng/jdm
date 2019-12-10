import http from './index';


export function getAddressApi (value) {
    return http.get('/address', {
        params: value
    });
}