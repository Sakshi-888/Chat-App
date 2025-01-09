function ChatList() {
  return (
    <div>
      <h2 className="text-xl font-normal mb-4 text-gray-200">ALL YOUR CHATS</h2>

      <div className="mb-6">
        <div className="flex items-center justify-center bg-rose-300 text-black rounded-xl p-2">
          <img
            src="src/assets/msg.png"
            className="h-6 w-5 object-contain mr-1"
          />
          <span className="text-sm font-sans font-semibold">
            Chat Images: ON
          </span>
        </div>
      </div>

      <div className="mb-6">
        <div className="text-base font-sans flex items-center justify-center">
          When a bot sends you images, you will be charged one secondary image
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-4 cursor-pointer rounded-full p-2 hover:bg-zinc-800">
          <img
            src="https://images.pexels.com/photos/1408978/pexels-photo-1408978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="h-12 w-12 rounded-full object-cover"
            alt="User"
          />
          <div className="flex-1">
            <p className="text-sm font-medium">Caressa Jessalin</p>
            <p className="text-xs text-gray-400">Lorem ipsum dolor sit am...</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 cursor-pointer rounded-full p-2 hover:bg-zinc-800">
          <img
            src="https://images.pexels.com/photos/206551/pexels-photo-206551.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="h-12 w-12 rounded-full object-cover"
            alt="User"
          />
          <div className="flex-1">
            <p className="text-sm font-medium">Letty Bride</p>
            <p className="text-xs text-gray-400">Lorem ipsum dolor sit am...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatList;
