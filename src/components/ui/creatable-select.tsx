import { Props } from "react-select";
import CreatableSelect from "react-select/creatable";

export const CreatableReactSelect =  ({ options, ...props }: Props) => {
  return <CreatableSelect  {...props} />
};


