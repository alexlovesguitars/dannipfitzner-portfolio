export default function Error502() {
  return (
    <div className="min-h-[85vh] text-white flex space-x-5 items-center justify-center">
      <h1 className="text-6xl text-black font-bold">502</h1>
      <span className="text-3xl text-black">|</span>
      <p className="text-black text-xl">Bad Gateway - Try refreshing the page!</p>
    </div>
  );
}
