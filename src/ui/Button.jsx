export default function Button({ children, type = "base" }) {
  const baseStyle = "rounded-[12px] bg-blue-600 px-6 py-2 text-white";
  // const baseButtonStyle = {

  // }
  const style = {
    base: baseStyle,
    primary: `${baseStyle} `,
    outline: `${baseStyle}  rounded-full duration-300 transition-all hover:bg-blue-600 hover:border-none border-white border-[1px] bg-transparent px-20 py-4 `,
  };
  return <button className={style[type]}>{children}</button>;
}
