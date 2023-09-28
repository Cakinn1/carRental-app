import { closeBookCarModal } from "../../../../redux/feature/signupSlice";
import XIconModal from "../XIconModal";

export default function ModalCompletedTitle() {
  return (
    <div className="border p-4 px-6 bg-purple-500 flex items-center justify-between">
      <h1 className="text-white text-2xl font-bold uppercase ">
        Completed reservation
      </h1>
      <XIconModal bookModal={true} modal={closeBookCarModal()} />
    </div>
  );
}
