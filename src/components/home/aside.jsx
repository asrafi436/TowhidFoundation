import { ShortCommitee } from "./ShortCommitee";
import { ShortNotice } from "./ShortNotice";

export const LeftAside = () => {
 return(
  <div>
    <ShortCommitee />
  </div>
 )
};

export const RightAside = () => {
  return(
    <div className="md:p-0 p-4">
    <ShortNotice/>
  </div>
  )
};
