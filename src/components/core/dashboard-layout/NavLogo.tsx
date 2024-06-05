import { appLogoPath } from "@/assets/images"

export const NavLogo = () => {
  return (
    <section className="h-24 px-2 flex justify-start items-center">
    <img src={appLogoPath} className="w-24 h-10" />
  </section>
  )
}
