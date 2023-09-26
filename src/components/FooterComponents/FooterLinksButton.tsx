export interface FooterLinksButtonProps {
  setText: (value: string) => void;
  handleClick: () => void;
  showText: boolean;
}
export default function FooterLinksButton({
  handleClick,
  setText,
  showText,
}: FooterLinksButtonProps) {
  return (
    <div className="w-full md:w-1/4 space-y-2">
      <h1 className="uppercase font-bold text-lg">Subscription</h1>
      <p>Subscribe your email address for latest news & updates.</p>
      <form
        onSubmit={(event) => event.preventDefault()}
        className="space-y-4  mb-3"
      >
        <input
          required
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Your Email"
          className="w-full placeholder:text-sm bg-[#ececec] py-3 px-4 pl focus:outline-none  "
        />
        <button
          onClick={() => handleClick()}
          className="py-3 w-full hover:shadow-2xl shadow-lg text-center border font-bold bg-purple-200 text-white  hover:bg-purple-500 hover:duration-500 ease-in-out transition-colors duration-500 hover:text-white text-lg"
        >
          subscribe
        </button>
        {showText && (
          <div className="text-center text-sm">Thank you for Subscribing!</div>
        )}
      </form>
    </div>
  );
}
