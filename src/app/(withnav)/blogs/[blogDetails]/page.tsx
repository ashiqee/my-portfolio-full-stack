import { title } from "@/components/primitives";

export default async function BlogDetailsPage({ params }: any) {
  const { blogDetails } = params;

  return (
    <div>
      <h1 className={title()}>Blog Details</h1>
      {blogDetails}
    </div>
  );
}
