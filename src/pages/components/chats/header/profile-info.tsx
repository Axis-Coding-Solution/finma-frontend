import { Avatar } from "@/components/ui/avatar"

const ProfileInfo = ({image,name,description}:{image:string,name:string | undefined,description?:string}) => {
  return (
    <div className="flex gap-2">

      <Avatar image={image} size="lg" />
      <div>
      <h1>{name}</h1>
      <h1 className="text-sm text-muted-foreground font-[400]"> {description}</h1>
      </div>
    </div>
  )
}

export default ProfileInfo