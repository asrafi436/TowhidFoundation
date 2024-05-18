import { ShortCommitee } from "./ShortCommitee";
import { ShortNotice } from "./ShortNotice";

export const LeftAside = () => {
 return(
  <div className="m-0 p-0">
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
