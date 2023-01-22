const User = () => {
  return (
    <div className="w-full border border-lightener-200 rounded-xl hover:border-lightener-400 duration-300 p-4 flex justify-between items-center gap-8">
      {/* full name */}
      <p className="text-lg font-medium text-center">Rafig Hajili</p>

      {/* is ready */}
      <p className={`text-sm font-medium text-green-500`}>Ready</p>
    </div>
  );
};
export default User;
