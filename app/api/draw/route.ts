import { pb } from "@/app/lib/pocketbase";
import { NextRequest, NextResponse } from "next/server";
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    apiKey: process.env.OPENAI,
});
const openai = new OpenAIApi(configuration);

async function generateImage(prompt: string): Promise<string> {
    let url = '';
    try {
        const aiResponse = await openai.createImage({
            prompt,
            n: 1,
            // size: '1024x1024',
            size: '512x512',
        });
        url = aiResponse.data.data[0].url!;
    } catch (error: any) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
        url = '';
    }
    return url;
}

export async function POST(req: NextRequest) {
    const { prompt } = await req.json();

    const image_url = await generateImage(prompt);

    if (image_url === '') {
        return;
    }

    const image = await fetch(image_url!, { method: 'GET' });
    const image_blob = await image.blob();

    let formData = new FormData();

    formData.append("prompt", prompt);
    formData.append("url", image_url!);
    formData.append("image", image_blob);

    const record = await pb.collection('art').create(formData);

    return NextResponse.json( { data: record }, { status: 201 });
}
