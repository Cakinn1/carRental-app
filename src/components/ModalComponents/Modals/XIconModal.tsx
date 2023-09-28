import { XMarkIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";

export default function XIconModal({
  modal,
  bookModal,
}: {
  modal: any;
  bookModal?: any;
}) {
  function handleClose() {
    document.body.classList.remove("modal-open");
    dispatch(modal);
  }

  const dispatch = useDispatch();
  return (
    <>
      <XMarkIcon
        onClick={() => handleClose()}
        className={`h-8  cursor-pointer ${
          bookModal ? "text-white" : "absolute right-6 top-10"
        }`}
      />
    </>
  );
}
