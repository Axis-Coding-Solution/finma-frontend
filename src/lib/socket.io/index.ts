import { io } from "socket.io-client";

const baseURL = import.meta.env.VITE_BACKEND_URL;
const socket = (() => {
  return io(baseURL).connect();
})();

export default socket;
