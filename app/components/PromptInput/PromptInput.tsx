'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from './PromptInput.module.css';

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
            <div className={styles.divSeparator}>
                <form onSubmit={(e) => sendPrompt(e)} className="flex">
                    <input className={styles.input}
                        type="text"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Image Prompt"
                        aria-label="Image prompt"
                    />
                    <button className={styles.button}
                        type="submit">
                        Desenhar
                    </button>
                </form>
            </div>
        </div>
    );
}
