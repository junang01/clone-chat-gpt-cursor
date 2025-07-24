import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      return new Response(JSON.stringify({ error: 'API 키가 설정되지 않았습니다.' }), { status: 500 });
    }

    const result = streamText({
      model: openai('gpt-4-turbo'),
      system: 'You are a helpful assistant.',
      messages,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    return new Response(JSON.stringify({ error: 'AI 응답 생성 중 오류가 발생했습니다.' }), { status: 500 });
  }
} 