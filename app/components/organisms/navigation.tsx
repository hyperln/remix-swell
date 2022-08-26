import { createPagesFunctionHandler } from '@remix-run/cloudflare-pages';
import { Link } from '../atoms/link';
import { Cart } from '../organism';

export function Navigation({children}) {
    return (
        <>
        <nav>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">

            <Link to='/' className="text-3xl font-bold">
                PSBArt
            </Link>
            <ul className='nav'>
                <li>
                    <Link to='/contact/'>Contact</Link>
                </li>
            </ul>
                </div>
            </div>
        </nav>
        <Cart />
        </>
        )
}
