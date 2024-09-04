import { forwardRef } from "react";
import { Props } from "react-select";

import AsyncSelect from "react-select/async";

export const ReactAsyncSelect = forwardRef<any, Props>((props, ref) => {
  return <AsyncSelect ref={ref} {...props} />;
});
