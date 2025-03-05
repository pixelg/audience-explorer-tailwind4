import logo from "@/assets/sand-logo.svg";

export const Brand = () =>
  <div className="flex text-xs justify-items-start items-center gap-2 overflow-hidden">
    <img
      className="size-6 shrink-0"
      src={logo}
      alt="Audience Explorer Logo"
    />
    <span>Sparrow TV | Audience Explorer</span>
  </div>