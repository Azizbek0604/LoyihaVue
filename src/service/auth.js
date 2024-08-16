import { Login } from '@/components';
import axios from './axios'

const authServise = {
    register(user) {
        return axios.post('/users', {user})
    },
    
}

export default authServise;