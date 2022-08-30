import { ReactElement } from "react";


interface Props {
    id?: string | ReactElement | ReactElement[];
    href?: ReactElement | ReactElement[];
    name?: ReactElement | ReactElement[];
    price?: string | ReactElement | ReactElement[];
    imageUrl?: string;
}

export function CollectionItem({
    id,
    href,
    name,
    price,
    imageUrl }: Props) {

    return (
        <a key={id} href={href} className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img alt={name} src={imageUrl} className="w-full h-full object-center object-cover group-hover:opacity-75" />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{price}</p>
        </a>
    );
}

