
import { createPagesFunctionHandler } from '@remix-run/cloudflare-pages';
import { Link } from '../atoms/link';
import { Cart } from '../organism';
import { Navigation } from '../organisms/navigation';

export function Layout({children}) {
    return (
        <>
        <Navigation />
        <div className="container">
            {children}
        </div>
        </>
    )
}