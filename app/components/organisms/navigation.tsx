import { Link } from '@remix-run/react';
import { CartMenu } from './cart-menu';

export function Navigation({ children }) {
    return (
        <>
            <nav className=" px-2 sm:px-4 py-2.5 border-t border-b border-gray-300" >
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="container flex flex-wrap justify-between items-center mx-auto">
                        {/* <div className="relative flex items-center justify-between h-16"> */}
                        {/* <div className="flex items-center"> */}
                        <Link to='/' className="text-3xl font-bold">
                            PSBArt
                        </Link>
                        {/* </div> */}
                        {/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button> */}
                        <div className="md:block md:w-auto" id="navbar-default">

                            <ul className="flex flex-row p-4 mt-4  md:flex-row md:space-x-8 md:mt-0 ">
                                <li>
                                    <Link className="block py-2 pr-4 pl-3" aria-current="page" to='/contact/'>Contact</Link>
                                </li>
                                <CartMenu />
                            </ul>
                        </div>
                    </div>
                </div >
            </nav >
        </>
    )
}
