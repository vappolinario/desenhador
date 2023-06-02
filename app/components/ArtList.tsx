import { Art } from "../lib/art";
import ArtCard from "./ArtCard";

interface Props {
    arts: Art[],
}

export default function ArtList({ arts }: Props) {
    return (
        <div className='w-4/5 flex justify-center items-center py-2 '>
            <div>
                {
                    arts.map((art) => {
                        return <ArtCard key={art.id} {...art} />;
                    })
                }
            </div>
        </div>
    );
}

