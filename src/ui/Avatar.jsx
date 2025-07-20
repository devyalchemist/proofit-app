export default function Avatar({ src }) {
  return (
    <div className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="aspect-square w-[40px] overflow-hidden rounded-full">
        <img className="h-full w-full object-cover" src={src} alt="" />
      </div>
    </div>
  );
}
