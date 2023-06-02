'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PromptInput() {
    const [prompt, setPrompt] = useState('');
    const router = useRouter();

    const sendPrompt = async (e: React.FormEvent) => {
        e.preventDefault();

        await fetch('/api/draw', {
            method: 'POST',
            body: JSON.stringify({ prompt: prompt }),
            headers: { 'Content-Type': 'application/json', },
        });

        setPrompt('');

        router.refresh();
    };

    return (
        <div className="items-center w-full">
            <div className="border-b border-teal-500 py-2">
                <form onSubmit={(e) => sendPrompt(e)} className="flex">
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Image Prompt"
                        aria-label="Image prompt"
                    />
                    <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                        type="submit">
                        Gerar Imagem
                    </button>
                </form>
            </div>
        </div>
    );
}
