import { Outlet } from "react-router-dom";

export const Layout = () => (
	<div className='w-screen max-w-screen-sm font-sans text-center text-white transition-all border-2 min-h-fit border-lime-400 p-7 rounded-xl'>
		<Outlet />
	</div>
)
