import { CheckboxGroup } from "../common"

export const ProfileCommunity = () => {
  return (
    <div>
            <p className="text-foreground 2xl:text-2xl text-lg 2xl:leading-7 leading-6">
              Select your community goals
            </p>
            <div className="flex flex-col 2xl:gap-8 gap-4 2xl:mt-10 mt-6 2xl:h-[240px] h-[180px] overflow-y-auto px-0.5 2xl:py-4 py-2">
              <CheckboxGroup label="Networking with other founders" />
              <CheckboxGroup label="Seeking mentorship" />
              <CheckboxGroup label="Gaining market insights" />
              <CheckboxGroup label="Learning new skills" />
              <CheckboxGroup label="Learning new skills" />
              <CheckboxGroup label="Learning new skills" />
            </div>
          </div>
  )
}
