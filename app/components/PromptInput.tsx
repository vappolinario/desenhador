'use client';

export default function PromptInput() {
    const sendPrompt = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const body = {
            prompt: formData.get('prompt'),
        };

        const res = await fetch('/api/draw', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const { image } = await res.json();
        const result = document.querySelector('#result');
        result.innerHTML = `<img src="${image}" width="512" />`;
    };

    return (
        <div className="items-center w-full">
            <div className="border-b border-teal-500 py-2">
                <form onSubmit={sendPrompt} className="flex">
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Image Prompt"
                        aria-label="Image prompt"
                        name="prompt"
                    />
                    <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                        type="submit">
                        Gerar Imagem
                    </button>
                </form>
            </div>
            <div className="flex w-full justify-center" id="result"></div>
        </div>
    );
}
