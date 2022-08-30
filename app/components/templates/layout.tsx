
import { Navigation } from '../organisms/navigation';

export function Layout({children}) {
    return (
        <>
        <Navigation children={undefined} />
        <div className="container">
            {children}
        </div>
        </>
    )
}