import CreatableSelect from "react-select/creatable";
import { Props } from "react-select";

const colorOptions = [{ value: "ocean", label: "Ocean" }];

export default ({ options = colorOptions, ...props }: Props) => (
  <CreatableSelect options={options} {...props} />
);
