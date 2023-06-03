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
        <div>
            <h1>{art.prompt}</h1>
            <br />
            <img
                width={300}
                src={url ?? '/mememan.webp'}
            />
            <br />
            <p>created: <em>{art.created}</em></p>
        </div>
    );
}

