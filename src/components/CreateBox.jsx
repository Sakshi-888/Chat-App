function CreateBox() {
  return (
    <div>
      <div className="w-auto h-px bg-gray-300 m-3 text-zinc-800" />
      <div />
      <div className="mt-2">
        <button className="flex items-center space-x-3">
          <span className="p-1 flex items-center justify-center w-6 h-6 bg-rose-400 rounded-full text-black text-xl cursor-pointer shadow-md">
            +
          </span>
          <span className="text-lg">Create new bot</span>
        </button>
      </div>
    </div>
  );
}

export default CreateBox;
