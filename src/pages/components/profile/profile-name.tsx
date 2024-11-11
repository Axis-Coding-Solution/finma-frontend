import { ProfileAvatar } from "@/assets/svgs"
import { Button, FloatingInput } from "@/components/ui"

export const ProfileName = () => {
  return (
    <div className="flex flex-col 2xl:gap-6 gap-4">
    <div className="flex items-center  gap-6">
      <div className="2xl:min-w-20 min-w-16 2xl:h-20 h-16 rounded-full border border-foreground flex justify-center items-center">
        <img src={ProfileAvatar} className="w-auto 2xl:-mt-0 -mt-2"  />
      </div>
      <Button variant="secondary-dark" className="w-full">
        Choose photo
      </Button>
    </div>
    <FloatingInput type="text" label="First name" />
    <FloatingInput type="text" label="Last name" />
  </div>
  )
}