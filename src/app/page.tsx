"use client";

import { useChat } from "@ai-sdk/react";
import { Button } from "@/components/ui/button";

const USER_AVATAR = "https://randomuser.me/api/portraits/men/32.jpg";
const AI_AVATAR = "https://randomuser.me/api/portraits/lego/1.jpg";
const USER_NAME = "You";
const AI_NAME = "AI Bot";

// 특수기호 제거 함수
function sanitize(text: string) {
  // 필요에 따라 제거할 특수문자 추가 가능
  return text.replace(/[\*\_\~\`\#\>\[\]\(\)\{\}\<\>\|\^\$\%\@\!\=\+\:\;\"\'\\/]/g, "");
}

export default function Page() {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    status,
    error,
    reload,
    setMessages,
  } = useChat({});

  const handleReset = () => setMessages([]);

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center py-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg flex flex-col h-[90vh]">
        {/* Header */}
        <div className="flex items-center gap-3 px-6 py-4 border-b">
          <img src={AI_AVATAR} alt="AI Avatar" className="w-10 h-10 rounded-full border" />
          <div className="flex flex-col">
            <span className="font-semibold text-lg">{AI_NAME}</span>
            <span className="text-xs text-green-500">Online Now</span>
          </div>
          <div className="flex-1" />
          <Button variant="outline" size="sm" onClick={handleReset} className="text-xs">대화 초기화</Button>
        </div>

        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-3">
          {messages.length === 0 && (
            <div className="text-gray-400 text-center mt-10">메시지를 입력해 대화를 시작하세요.</div>
          )}
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {message.role !== "user" && (
                <img src={AI_AVATAR} alt="AI" className="w-8 h-8 rounded-full mr-2 self-end" />
              )}
              <div
                className={`rounded-2xl px-4 py-2 max-w-[70%] text-sm shadow-sm
                  ${message.role === "user"
                    ? "bg-pink-100 text-gray-800 rounded-br-none"
                    : "bg-gray-100 text-gray-700 rounded-bl-none"}
                `}
              >
                {message.role === "user"
                  ? message.content
                  : sanitize(message.content)}
              </div>
              {message.role === "user" && (
                <span className="ml-2 self-end text-xs text-pink-500 font-bold">나</span>
              )}
            </div>
          ))}
        </div>

        {/* Status & Error */}
        {status === "streaming" && (
          <div className="px-6 pb-1 text-xs text-blue-500">AI가 답변 중입니다...</div>
        )}
        {error && (
          <div className="px-6 pb-1 text-xs text-red-500">
            에러가 발생했습니다. <button onClick={() => reload()} className="underline">다시 시도</button>
          </div>
        )}

        {/* Input */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 px-4 py-4 border-t bg-white rounded-b-3xl">
          <input
            name="prompt"
            value={input}
            onChange={handleInputChange}
            disabled={status !== "ready"}
            className="flex-1 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-200 bg-gray-50"
            placeholder="Type your message..."
            autoComplete="off"
          />
          <Button
            type="submit"
            disabled={status !== "ready" || input.trim() === ""}
            className="rounded-full px-5 py-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold text-sm shadow disabled:opacity-50"
          >
            전송
          </Button>
        </form>
      </div>
    </div>
  );
}
