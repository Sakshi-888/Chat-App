import ChatBox from "./ChatBox";
import ChatList from "./ChatList";
import CreateBox from "./CreateBox";

const Sidebar = () => {
  return (
    <div className=" h-[85vh] flex flex-col  bg-black text-white px-5 py-1 space-y-4">

      <div className="flex flex-1 space-x-4">

        <div className="w-1/4 bg-neutral-900 p-6 shadow-lg rounded-xl border-gray-700 flex flex-col">
          <ChatList />
          <CreateBox />
        </div>

        <ChatBox />

      </div>
    </div>
  );
};

export default Sidebar;
