function Button({
  value,
  tooltip,
  tooltip_direction = "bottom",
  onClick_function,
  extraClass,
}) {
  if (tooltip_direction === "bottom") {
    var btnstyle = {
      top: "110%",
      left: "50%",
      transform: "translateX(-50%)",
    };
  } else if (tooltip_direction === "right") {
    var btnstyle = {
      top: "50%",
      transform: "translateY(-50%)",
      left: "calc(100% + 0.3rem)",
    };
  }

  return (
    <div className="group relative inline-block">
      <button
        className={`rounded-lg px-2 py-1 text-sm font-bold text-text1 transition-all hover:bg-hoverclr hover:text-white hover:transition-all ${extraClass}`}
        onClick={onClick_function}
      >
        {value}
      </button>
      {tooltip && (
        <span
          style={btnstyle}
          className="absolute z-10 hidden text-nowrap rounded-md bg-black px-2 py-1 text-xs text-white md:group-hover:inline-block"
        >
          {tooltip}
        </span>
      )}
    </div>
  );
}
export default Button;
