"use client";

import {
  ChatBubbleIcon,
  Cross1Icon,
  PaperPlaneIcon,
  SewingPinFilledIcon,
} from "@radix-ui/react-icons";
import { Message, useAssistant } from "ai/react";
// import { SendHorizonalIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  assistantId: string;
  name: string;
};

export default function ChatBot({ assistantId, name }: Props) {
  const [open, setOpen] = useState(false);

  const { status, messages, input, submitMessage, handleInputChange, error } =
    useAssistant({
      api: "/api/assistant",
    });

  // When status changes to accepting messages, focus the input:
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (status === "awaiting_message") {
      inputRef.current?.focus();
    }
  }, [status]);

  return (
    <>
      {!open ? (
        <button
          className="fixed bottom-8 right-8 btn btn-circle btn-primary bg-primary w-12 h-12 flex items-center"
          onClick={() => setOpen(!open)}
        >
          <ChatBubbleIcon className="w-6 h-6 m-auto text-white" />
        </button>
      ) : (
        <>
          <button
            className="fixed bottom-8 right-8 btn btn-circle btn-primary bg-primary w-12 h-12 flex items-center"
            onClick={() => setOpen(!open)}
          >
            <Cross1Icon className="w-5 h-5 m-auto text-white" />
          </button>
          <div className="fixed bottom-24 right-8 bg-base-100 rounded-2xl overflow-hidden text-primary-content">
            <h4 className="bg-primary text-center p-3">{name}</h4>

            <div className="p-5 h-[360px] w-[350px] overflow-y-auto">
              <ChatBubble text="Ask me about Chelsea!" username="assistant" />
              {messages.map((m: Message) => (
                <div key={m.id}>
                  {m.role !== "data" ? (
                    <ChatBubble text={m.content} username={m.role} />
                  ) : (
                    <ChatBubble
                      text={JSON.stringify(m.data, null, 2)}
                      username={name}
                    />
                  )}
                </div>
              ))}
              {status === "in_progress" && (
                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS chat bubble component"
                        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      />
                    </div>
                  </div>
                  <div className="chat-header">{name}</div>
                  <span className="loading loading-dots loading-xs"></span>
                </div>
              )}
            </div>
            <div className="flex justify-between items-center bg-white pr-3 text-black border-t-2">
              <form
                onSubmit={(e) =>
                  submitMessage(e, { data: { assistantId: assistantId } })
                }
              >
                <input
                  ref={inputRef}
                  disabled={status !== "awaiting_message"}
                  type="text"
                  value={input}
                  placeholder="Type here"
                  className="h-12 bg-inherit ml-4 border-none focus:outline-none"
                  onChange={handleInputChange}
                />
              </form>
              <PaperPlaneIcon className="text-primary cursor-pointer w-6 h-6" />
            </div>
          </div>
        </>
      )}
    </>
  );
}

type BubbleProps = {
  text: string;
  username: string;
  time?: string;
  imgSrc?: string;
};

function ChatBubble({ text, username, time, imgSrc }: BubbleProps) {
  return (
    <div className={`chat chat-${username === "user" ? "end" : "start"}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={
              imgSrc ||
              "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            }
          />
        </div>
      </div>
      <div className="chat-header text-base-content">
        {username}
        {time && <time className="text-xs opacity-50 ml-2">{time}</time>}
      </div>
      <div className="chat-bubble chat-bubble-primary text-neutral">{text}</div>
    </div>
  );
}
