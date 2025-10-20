const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
      <div className="max-w-md text-center space-y-6">
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            <div
              className="relative w-16 h-16 rounded-2xl flex items-center justify-center animate-bounce"
              style={{ animationTimingFunction: "ease" }}
            >
              <div className="absolute flex items-center gap-1">
                <p
                  className="rounded-full bg-white size-1 z-90 animate-bounce-small"
                  style={{
                    animationDelay: "0s",
                    animationDuration: "2s",
                    animationTimingFunction: "ease-in-out",
                  }}
                ></p>
                <p
                  className="rounded-full bg-white size-1 z-90 animate-bounce-medium"
                  style={{
                    animationDelay: "0.2s",
                    animationDuration: "2s",
                    animationTimingFunction: "ease-in-out",
                  }}
                ></p>
                <p
                  className="rounded-full bg-white size-1 z-90 animate-bounce-large"
                  style={{
                    animationDelay: "0.3s",
                    animationDuration: "2s",
                    animationTimingFunction: "ease-in-out",
                  }}
                ></p>
              </div>
              <img src="/Logo.png" alt="Textory" className="logo w-16 z-40" />
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold">Welcome to Textory!</h2>
        <p className="text-base-content/60">
          Select a conversation from the sidebar to start chatting...
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
