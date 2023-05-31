import { NextRequest, NextResponse } from "next/server";
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    apiKey: process.env.OPENAI,
});
const openai = new OpenAIApi(configuration);


export async function POST(req: NextRequest) {
    const { prompt } = await req.json();

    console.log("prompt", prompt);

    const aiResponse = await openai.createImage({
        prompt,
        n: 1,
        size: '1024x1024',
    });

    const image = aiResponse.data.data[0].url;

    return NextResponse.json({ image });
}
