function Answer({ value }) {
  return (
    <div className="relative p-3 bg-bg2 text-text1 rounded-xl w-screen max-w-3xl Md:max-w-[23rem] border border-borderclr2">
      {value}
      <div
        className={`px-0 py-2 absolute -bottom-3 -right-1 text-text2 border border-borderclr rounded-lg text-xs transition-all duration-200 bg-bg2 `}
      >
        <span className="nf cursor-pointer nf-fa-clipboard_alt hover:bg-bg4 px-1 py-2 rounded-md transition-all m-1">
          &nbsp; Copy
        </span>
        <span className="nf cursor-pointer nf-cod-refresh hover:bg-bg4 px-1 py-2 rounded-md transition-all m-1">
          &nbsp; Retry
        </span>
        <span className="nf cursor-pointer nf-oct-thumbsup hover:bg-bg4 px-2 py-2  rounded-md transition-all m-1"></span>
        <span className="nf cursor-pointer nf-oct-thumbsup rotate-180 hover:bg-bg4 px-2 py-2  rounded-md transition-all m-1"></span>
      </div>
    </div>
  );
}
export default Answer;
