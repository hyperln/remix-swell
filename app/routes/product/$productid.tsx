import { useParams } from "@remix-run/react";

export default function Productid() {
    const params = useParams();

    return (

        <div>
            <h3>Product id {params.productid}</h3>
        </div>
    );
}