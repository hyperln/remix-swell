import { Outlet } from "@remix-run/react";

export default function product() {
    return (
        <div>
            <h1>Product</h1>
            <Outlet />
        </div>
    );
}