import { pb } from '../../lib/pocketbase';

interface Props {
  params: {
    id: string;
  }
}

export default async function ArtDetail({ params }: Props) {
  const art = await pb.collection('art').getOne(params.id);
  const url = pb.getFileUrl(art, art.image);

  return (
    <div className='flex flex-col items-center'>
      <blockquote className="p-4 my-4 border-l-4 text-mintcream-950 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
        <p>{art.prompt}</p>
      </blockquote>
      <br />
      <img
        width={300}
        src={url ?? '/mememan.webp'}
      />
      <br />
      <p className='text-mintcream-500'>created: <em>{art.created}</em></p>
    </div>
  );
}

