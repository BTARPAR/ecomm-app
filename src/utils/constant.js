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

export const HEARTBEAT = async() =>{
    return await fetch('/heartbeat', {
        method: 'GET',
        headers: {
            credentials: 'include'
        }
    })
}