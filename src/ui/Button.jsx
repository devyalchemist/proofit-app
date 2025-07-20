export default function Button({ children, type = "base", icon = "" }) {
  const baseStyle = "rounded-[12px] bg-component px-6 py-2 ";
  // const baseButtonStyle = {

  // }
  const style = {
    base: `${baseStyle} text-white`,
    primary: `${baseStyle} `,
    outline: `${baseStyle}  rounded-full duration-300 transition-all text-black hover:bg-green-600  hover:shadow-lg/30 bg-component text-white   px-20 py-4 `,
  };
  return (
    <button className={style[type]}>
      <span>{icon}</span>
      {children}
    </button>
  );
}
