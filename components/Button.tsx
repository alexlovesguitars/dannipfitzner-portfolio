interface ButtonProps {
  btnTitle: string;
};

export default function Button({
  btnTitle
}: ButtonProps) {
  return (
    <button className="">{btnTitle}</button>
  )
}
