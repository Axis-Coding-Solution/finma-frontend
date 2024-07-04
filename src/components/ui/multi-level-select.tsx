import { forwardRef, useEffect } from "react";
import {
  ClassNamesConfig,
  GroupBase,
  OptionProps,
  Props,
  SetValueAction,
} from "react-select";
import { ReactSelect } from "./react-select";
import { Checkbox } from "./checkbox";
import { twMerge } from "tailwind-merge";
import { Label } from "./label";
import CreatableSelect from "react-select/creatable";

const classNames: ClassNamesConfig<unknown, boolean, GroupBase<unknown>> = {
  control() {
    return "!w-full";
  },
  input() {
    return "!min-w-full";
  },
  valueContainer() {
    return "!w-full h-full py-3 px-3 flex gap-1 items-center !overflow-auto text-sm";
  },
  multiValue() {
    return "bg-success text-success-foreground px-1.5 py-0.5 rounded text-sm";
  },
  multiValueRemove() {
    return "hover:text-red-400";
  },
  menuPortal() {
    return "block relative";
  },
  menu() {
    return "px-5 !relative";
  },
  menuList() {
    return "flex flex-col gap-1";
  },
  option() {
    return "bg-accent p-1 !inline-block !cursor-pointer rounded !max-w-fit";
  },
};

// const GroupHeading = (props: GroupHeadingProps) => {
//   const { children } = props;
//   const uid = crypto.randomUUID();
//   return (
//     <div className="py-2 px-3 w-full flex items-center gap-2">
//       <Checkbox id={`option-${uid}`} />
//       <Label className="mb-0" htmlFor={`option-${uid}`}>
//         {children}
//       </Label>
//     </div>
//   );
// };

const Option = (props: OptionProps) => {
  const { innerProps, setValue, getValue, children, innerRef } = props;
  const { className, ...othersInnerProps } = innerProps;
  const uid = crypto.randomUUID();
  const data: any = props.data;

  const values: any = getValue();

  useEffect(() => {
    if (values && values.length > 0) {
      const newValues = values.map((value: any) => {
        if (value.values && value.values.length)
          return {
            value: value.value,
            label: value.label,
            selected: [],
          };
        return value;
      });
      setValue(newValues, "select-option");
    }
  }, [values.length]);

  return (
    <div className="flex flex-col gap-5 divide-y divide-border">
      <div
        ref={innerRef}
        className={twMerge(
          className,
          "py-2 px-3 w-full flex items-center gap-2"
        )}
        {...othersInnerProps}
      >
        <Checkbox id={`option-${uid}`} checked={props.isSelected} />
        <Label
          onClick={(e) => e.stopPropagation()}
          type="default"
          className="mb-0"
          htmlFor={`option-${uid}`}
        >
          {children}
        </Label>
      </div>
      {props.isSelected && (
        <div>
          <CreatableSelect
            isMulti
            menuIsOpen
            isClearable={false}
            unstyled
            closeMenuOnSelect={false}
            classNames={classNames}
            menuShouldScrollIntoView={false}
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
              NoOptionsMessage: () => null,
              IndicatorsContainer: () => null,
            }}
            onKeyDown={(e) => {
              e.stopPropagation();
              return e;
            }}
            onChange={(e, actionMeta) => {
              const newValues = values.map((value: any) => {
                if (value.value === data?.value)
                  return {
                    value: value.value,
                    label: value.label,
                    selected: e,
                  };
                return value;
              });

              console.log(newValues);
              setValue(newValues, actionMeta.action as SetValueAction);
              return e;
            }}
            options={data?.values}
          />
        </div>
      )}
    </div>
  );
};

export const MultiLevelSelect = forwardRef<any, Props>((props, ref) => {
  return (
    <ReactSelect
      ref={ref}
      isMulti
      hideSelectedOptions={false}
      onChange={(e) => {
        console.log(e);
        return e;
      }}
      components={{
        Option,
        // GroupHeading,
      }}
      {...props}
    />
  );
});
