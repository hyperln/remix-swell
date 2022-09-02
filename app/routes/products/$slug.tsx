import { useParams } from '@remix-run/react';

export default function ProductPage() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h3>Product id {JSON.stringify(params)}</h3>
    </div>
  );
}
