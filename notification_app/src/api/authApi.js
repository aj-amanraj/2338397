import axios from "axios";

const BASE_URL = "http://4.224.186.213/evaluation-service";

export const getAuthToken = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/auth`, {
      email: "aman2807aj@gmail.com",
      name: "Aman Raj",
      rollNo: "2338397",
      accessCode: "nwwsKx",
      clientID: "d99a2127-1cc4-46ff-90c8-10628c029628",
      clientSecret: "JdXTTuYDncnmhkXa",
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
