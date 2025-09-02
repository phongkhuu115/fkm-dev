import { NextResponse } from "next/server";
import { format } from "date-fns";

export async function POST(req: Request) {
  try {
    const payload = await req.json()

    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: process.env.SERVICE_ID,
        template_id: process.env.TEMPLATE_ID,
        user_id: process.env.EMAILJS_PUBLIC_KEY,
        accessToken: process.env.EMAILJS_PRIVATE_KEY,
        template_params: {
          ...payload,
          time: format(new Date(), "dd/MM/yyyy HH:mm")
        },
      }),
    });

    if (!res.ok) {
      const text = await res.text().catch((error) => {
        return "Server Error"
      });
      return NextResponse.json({ error: text }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}