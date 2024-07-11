import { useState } from "react";

export const useModal = () => {
  const [show, setShow] = useState(false);
  const open = () => setShow(true);
  const close = () => setShow(false);
  const toggle = () => setShow(!show);

  return { show, setShow, open, close, toggle };
};
