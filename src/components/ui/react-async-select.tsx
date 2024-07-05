import { forwardRef } from "react";
import { Props } from "react-select";

import { ReactSelect } from "./react-select";

export const ReactAsyncSelect = forwardRef<any, Props>((props, ref) => {
  return <ReactSelect ref={ref} {...props} />;
});
