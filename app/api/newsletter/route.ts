/**
 * POST /api/newsletter — subscribes an email to the Brevo (Sendinblue) list.
 *
 * Server-side only: the API key never reaches the browser.
 * Config (see .env.example): BREVO_API_KEY, BREVO_LIST_ID
 */

const BREVO_CONTACTS_URL = `${process.env.BREVO_CONTACTS_URL}`;

// Pragmatic email shape check — Brevo is the real validator
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_LIST_ID);

  // Misconfigured server → quiet for visitors, loud in the server log
  if (!apiKey || !Number.isInteger(listId)) {
    console.error(
      "Newsletter: BREVO_API_KEY / BREVO_LIST_ID missing or invalid in .env",
    );
    return Response.json(
      { error: "Signup is temporarily unavailable — please try again later." },
      { status: 503 },
    );
  }

  let email = "";
  try {
    const body = (await request.json()) as { email?: unknown };
    if (typeof body.email === "string") email = body.email.trim();
  } catch {
    // Non-JSON body → email stays "" and fails validation below
  }

  if (!EMAIL_RE.test(email) || email.length > 254) {
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  try {
    const res = await fetch(BREVO_CONTACTS_URL, {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
        // Already subscribed → update the contact instead of erroring
        updateEnabled: true,
      }),
      cache: "no-store",
    });

    if (!res.ok) {
      // Log the detail server-side, never leak it to the visitor
      console.error(`Brevo subscribe failed (${res.status}):`, await res.text());
      return Response.json(
        { error: "We couldn't add you just now — please try again." },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Brevo request error:", err);
    return Response.json(
      { error: "Network error — please try again." },
      { status: 502 },
    );
  }
}
