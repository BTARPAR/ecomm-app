export const defaultAddress = {
    fullname: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zip: ''
}

export const defaultPayment = {
    cc_name: '',
    cc_no: '',
    cc_month: '',
    cc_year: '',
    cc_cvv: ''
}

export const HEARTBEAT = async () => {
    return await fetch(API_URL('/heartbeat'), {
        method: 'GET',
        headers: {
            credentials: 'include',
            'Access-Control-Allow-Credentials': true
        }
    })
}

export const API_URL = (endpoint) => {
    if (window.location.origin === 'https://e-commapp.netlify.app') {
        return 'https://e-comm-service.herokuapp.com' + endpoint
    } else {
        return endpoint
    }
}