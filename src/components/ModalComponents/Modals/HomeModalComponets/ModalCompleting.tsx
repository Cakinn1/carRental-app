import { BsInfoCircleFill } from "react-icons/bs";

export default function ModalCompleting() {
  return (
    <div className="px-6 space-y-2 text-lg font-bold text-purple-500 bg-purple-200 py-8">
      <div className="flex items-center gap-x-2">
        <BsInfoCircleFill className="rounded-l" />
        <h1>Upon completing this reservation enquiry, you will receive:</h1>
      </div>
      <p className="text-[#777] font-semibold text-lg">
        Your rental voucher to produce on arrival at the rental desk and a
        toll-free customer support number.
      </p>
    </div>
  );
}
