import axios from 'axios';
import { error } from 'jquery';
import Cookies from 'js-cookie';
const TIME_REQUIMENT = 30;
export const getAccount =  async (token) => {
    if (token) {
        try {
            const response = await axios.post('http://localhost:8080/api/authentic', { token: token });
            return response.data.email;
        } catch (err) {
            // Bỏ qua token đã hết hạn và xóa nó
            Cookies.remove('token');
            return null; // Trả về giá trị không hợp lệ
        }
    }
    return null; // Trả về giá trị không hợp lệ nếu không có token
}