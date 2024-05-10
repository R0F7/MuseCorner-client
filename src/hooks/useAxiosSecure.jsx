import axios from "axios";

const useAxiosSecure = () => {
    const axiosSecure = axios.create({
        baseURL: 'https://car-doctor-server-sandy-ten.vercel.app',
        withCredentials: true,
    })
    return axiosSecure;
};

export default useAxiosSecure;