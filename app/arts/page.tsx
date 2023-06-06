import ArtList from '../components/ArtList';
import PromptInput from '../components/PromptInput/PromptInput';
import { Art } from '../lib/art';
import { pb } from '../lib/pocketbase';

export const fetchCache = 'force-no-store'

async function getArtList(): Promise<Art[]> {
    const arts = await pb.collection('art')
        .getFullList({ sort: '-created', });

    const artList = arts.map((r) => {
        return {
            id: r.id,
            url: r.url,
            thumb: pb.getFileUrl(r, r.image, { 'thumb': '100x300' }),
            prompt: r.prompt,
        } as Art
    });

    return artList;
}

export default async function Arts() {
    const arts = await getArtList();
    return (
        <div className='w-4/5 grid grid-cols-1 items-center py-2 '>
            <PromptInput />
            <ArtList arts={arts} />
        </div>
    );
}
