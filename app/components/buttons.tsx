import { Link } from "@remix-run/react";

const Button = (props: buttonProps) => {
    return (  <>
    {props.fancy && (
        <Link to={props.link}>
        <button className="rounded-tr-[40px] rounded-bl-[40px]  py-3 px-20 border border-[3px] border-blue text-blue text-base font-semibold hover:bg-blue hover:text-white ease-out duration-300 sm:px-12 xs:px-4 xs:py-2">
            {props.action}
        </button>
        </Link>
    )}
    </>);
}
 
export interface buttonProps  {
fancy: string;
link: string;
action: string;
}
export default Button;