import { useEffect } from "react";
import { BsInfo, BsInfoCircle, BsInfoCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import {
  openBookCarModal,
  closeBookCarModal,
} from "../../redux/feature/signupSlice";
import { ModalState } from "../HomeComponents/BookCarComponent/HomeBookCarSelect";
import Form from "./Modals/Form";
import ModalCompletedTitle from "./Modals/HomeModalComponets/ModalCompletedTitle";
import ModalCompleting from "./Modals/HomeModalComponets/ModalCompleting";
import ModalLocation from "./Modals/HomeModalComponets/ModalLocation";

export default function HomeInfoModal() {
  const isOpen = useSelector(
    (state: ModalState) => state.modal.bookCarModalOpen
  );
  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30">
          <div className="relative top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 border w-3/4 h-3/4  ">
            <ModalCompletedTitle />
            <ModalCompleting />
            <ModalLocation />
          </div>
        </div>
      )}
    </>
  );
}
