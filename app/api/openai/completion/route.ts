import { authOptions } from "@/lib/auth";
import { openAiHelper } from "@/lib/openai";
import { getServerSession } from "next-auth";
import type { NextRequest, NextResponse as NR } from 'next/server';
import { NextResponse } from 'next/server';
import OpenAI from "openai";

export async function POST(req: NextRequest): Promise<NR> {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const openai = await openAiHelper(session.user.id);

  if (!openai) {
    return NextResponse.json({ error: "No OpenAI key found" }, { status: 500 });
  }

  try {
    const { prompt } = await req.json();

  // Ask OpenAI for a streaming completion given the prompt
  const response = await openai.completions.create({
    model: "gpt-4o",
    max_tokens: 10000,
    stream: true,
    prompt,
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}
