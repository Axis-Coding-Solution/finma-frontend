import { io } from "socket.io-client";

const baseURL = import.meta.env.VITE_BACKEND_URL;

export default (() => {
  return io(baseURL).connect();
})();
