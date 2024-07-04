import { forwardRef, useEffect, useState } from "react";
import {
  ClassNamesConfig,
  GroupBase,
  OptionProps,
  Props,
  SetValueAction,
} from "react-select";
import { ReactSelect } from "./react-select";
import { twMerge } from "tailwind-merge";
import CreatableSelect from "react-select/creatable";
import { CustomCheckbox } from "./custom-checkbox";

const classNames: ClassNamesConfig<unknown, boolean, GroupBase<unknown>> = {
  control() {
    return "!w-full";
  },
  input() {
    return "inline-block";
  },
  valueContainer() {
    return "h-full py-3 px-3 flex gap-1 items-center !overflow-auto text-sm";
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
  }, []);

  return (
    <div
      ref={innerRef}
      onBlur={(e) => e.stopPropagation()}
      className="mt-1 flex flex-col gap-5 divide-y divide-border"
    >
      <div
        className={twMerge(
          className,
          "cursor-pointer hover:bg-card transition bg-py-2 px-3 w-full flex items-center gap-2 rounded-lg"
        )}
        {...othersInnerProps}
      >
        <div className="py-2 px-3 w-full flex items-center gap-2">
          <CustomCheckbox size="xs" hideLabel checked={props.isSelected} />
          <span className="mb-0">{children}</span>
        </div>
      </div>
      {props.isSelected && (
        <CreatableSelect
          isMulti
          menuIsOpen
          isClearable={false}
          unstyled
          closeMenuOnSelect={false}
          captureMenuScroll={false}
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
            setValue(newValues, actionMeta.action as SetValueAction);
            return e;
          }}
          value={values.selected}
          options={data?.values}
        />
      )}
    </div>
  );
};

export const MultiLevelSelect = forwardRef<unknown, Props>((props, ref) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => setMenuIsOpen(!menuIsOpen);

  return (
    <ReactSelect
      ref={ref}
      isMulti
      onMenuOpen={toggleMenu}
      onBlur={(e) =>
        e.relatedTarget ? setMenuIsOpen(true) : setMenuIsOpen(false)
      }
      menuIsOpen={menuIsOpen}
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      components={{
        Option,
      }}
      {...props}
    />
  );
});
