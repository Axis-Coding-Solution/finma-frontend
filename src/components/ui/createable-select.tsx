import CreatableSelect from "react-select/creatable";

const colorOptions = [{ value: "ocean", label: "Ocean" }];
export default () => <CreatableSelect isMulti options={colorOptions} />;
