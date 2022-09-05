import { Link } from '@remix-run/react';
import { CartMenu } from './cart-menu';

export function Navigation({ children }) {
  return (
    <>
      <nav className=" px-2 sm:px-4 py-2.5 border-t border-b border-gray-300" >
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <Link to='/' className="text-3xl font-bold">
              PSBArt
            </Link>

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
