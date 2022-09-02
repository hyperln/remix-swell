
import { Navigation } from '../organisms/navigation';

export function Layout({ children }) {
    return (
        <>
            <Navigation children={undefined} />
            <div className="sm:w-full-width-container md:w-full">
                {children}
            </div>
        </>
    )
}