interface Props {
  children?: React.ReactNode;
  type?:
    | "text"
    | "number"
    | "password"
    | "email"
    | "date"
    | "time"
    | "datetime-local"
    | "search"
    | "tel"
    | "url"
    | "month"
    | "week"
    | "color"
    | "range"
    | "checkbox"
    | "radio"
    | "file"
    | "hidden"
    | "image"
    | "submit"
    | "reset"
    | "button";
  value?: any;
  setValue: React.Dispatch<React.SetStateAction<any>>;
}

const Input = ({ children, type='text', value, setValue }: Props) => {
  return <input className="h-10 px-3 rounded-md border-none bg-neutral-600 text-slate-200 text-base font-bold w-full" type={type} value={value} onChange={(e) => setValue(e.target.value)}>{children}</input>
}

export default Input
