import { Props } from "react-select";
import CreatableSelect from "react-select/creatable";

const colorOptions = [{ value: "ocean", label: "Ocean" }];
export default ({ options, ...props }: Props) => (
  <CreatableSelect options={colorOptions} {...props} />
);
