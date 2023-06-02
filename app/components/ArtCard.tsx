import Link from 'next/link';
import { Art } from '../lib/art';

export default function ArtCard({ id, prompt, thumb}: Art) {
    const resume = `${prompt?.substring(0, 10)}`;

    return (
        <div >
            <div>
                <Link href={`/art/${id}`} className='flex items-center'>
                <img className='m-2'
                    width={32}
                    height={32}
                    src={thumb}
                    alt={resume}
                />
                {prompt}</Link>
            </div>
        </div>
    );
}

