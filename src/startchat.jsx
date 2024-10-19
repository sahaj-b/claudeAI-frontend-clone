import { useState, useEffect } from "react";
import Button from "./button.jsx";
import Prompt from "./prompt.jsx";
function StartChat() {
  const [hideSuggestions, setHideSuggestions] = useState(false);
  const [isText, setIsText] = useState(false);
  useEffect(() => {
    setHideSuggestions(isText);
  }, [isText]);
  return (
    <div>
      <div className="rounded-2xl border border-borderclr bg-bg2 px-5 py-3">
        <textarea
          placeholder="How can Claude help you today?"
          onChange={(event) => {
            setIsText(Boolean(event.target.value));
          }}
          className="h-20 w-screen max-w-2xl resize-none bg-bg2 text-lg text-text1 placeholder-text2 caret-text1 outline-none"
        ></textarea>
        <i
          className={`${isText ? "" : "scale-0"} nf nf-fa-arrow_up absolute -translate-x-7 cursor-pointer rounded-xl bg-orng px-2.5 py-2 text-xs text-text1 transition-all duration-300 hover:opacity-90`}
          id="up"
        ></i>
        <p className="text-l text-text1">Claude 3.5 Sonnet</p>
      </div>

      <div
        className={`${hideSuggestions ? "max-h-14 " : "max-h-80"} relative m-auto flex max-w-2xl flex-col rounded-b-2xl border-b border-l border-r border-borderclr2 bg-bg3 p-3 transition-all duration-300 ease-in-out`}
      >
        <div className="flex justify-between">
          <button
            onClick={() => {
              setHideSuggestions(false);
            }}
            className={`${hideSuggestions ? "font-bold" : "cursor-default"} text-sm text-text2`}
          >
            {hideSuggestions
              ? "Show suggestions"
              : "Get started with an example below"}
          </button>
          <div className="px-2">
            <Button
              value={<i className="nf nf-cod-device_camera"></i>}
              tooltip="Capture Screenshot"
            />
            <Button
              value={<i className="nf nf-fa-paperclip"> Add Content</i>}
              tooltip={
                <span>
                  Upload docs or images
                  <span className="text-text2">(Max 5, 30mb each)</span>
                </span>
              }
            />
          </div>
        </div>

        <div className={`flex`}>
          <Prompt
            value="Extract insights from report"
            isHidden={hideSuggestions}
          />
          <Prompt value="Generate excel formulas" isHidden={hideSuggestions} />
          <Prompt
            value="Generate interview questions"
            isHidden={hideSuggestions}
          />
          <div className="m-auto flex flex-col space-y-1">
            <Button
              value={
                <i
                  className={`nf nf-cod-close ${hideSuggestions ? "hidden" : ""} text-xs opacity-70 hover:opacity-100`}
                ></i>
              }
              tooltip="Hide suggestions"
              tooltip_direction="right"
              onClick_function={() => {
                setHideSuggestions(true);
              }}
            />
            <Button
              value={
                <i
                  className={`nf nf-fa-refresh ${hideSuggestions ? "hidden" : ""} text-xs opacity-70 hover:opacity-100`}
                ></i>
              }
              tooltip="Reload suggestions"
              tooltip_direction="right"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default StartChat;
