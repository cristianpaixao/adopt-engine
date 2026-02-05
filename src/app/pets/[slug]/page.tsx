type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PetDetailPage({ params }: Props) {
  const { slug } = await params;

  return <div>Pet Detail Page for slug: {slug}</div>;
}
