import PetDetail from '@/src/components/PetDetail';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PetDetailPage({ params }: Props) {
  const { slug } = (await params) || '';
  return <PetDetail slug={slug} />;
}
