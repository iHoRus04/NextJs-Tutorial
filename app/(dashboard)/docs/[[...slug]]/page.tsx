import { notFound } from "next/navigation";

export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if( slug?.length >= 3 ){
    notFound();
  }
  else  if (slug?.length === 2) {
    return (
      <h1>
        Doc for feat {slug[0]} and {slug[1]}
      </h1>
    )
  }else if (slug?.length === 1){
     return (
      <h1>
        Doc for feat {slug[0]} 
      </h1>
    )
  }
  return <h1>Docs</h1>
}
