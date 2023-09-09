import { XMarkIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";

export default function XIconModal({ modal }: any) {
  const dispatch = useDispatch();
  return (
    <>
      <XMarkIcon
        onClick={() => dispatch(modal)}
        className="h-8 absolute right-6 top-10 cursor-pointer"
      />
    </>
  );
}
