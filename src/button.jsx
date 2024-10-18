function Button({ value, tooltip, tooltip_direction = "bottom", onClick_function, extraClass }) {
  if (tooltip_direction === "bottom") {
    var btnstyle = {
      top: "2rem",
      left: "50%",
      transform: "translateX(-50%)",
    }
  } else if (tooltip_direction === "right") {
    var btnstyle = {
      top: "0.2rem",
      left: "120%",
    }
  }

  return (
    <div className="group relative inline-block">
      <button className={`text-text1 px-2 py-1 text-sm font-bold hover:transition-all hover:bg-hoverclr hover:text-white transition-all rounded-lg ${extraClass}`} onClick={onClick_function}>{value}</button>
      {tooltip && (<span style={btnstyle} className="text-xs text-white rounded-md bg-black px-2 py-1 absolute text-nowrap hidden group-hover:inline-block z-10">{tooltip}</span>
      )}    </div >
  )
}
export default Button
