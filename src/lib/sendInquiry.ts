// Envío de las consultas de la web. Solo se da por enviado si el servicio lo confirma.
// VITE_FORMSPREE_ENDPOINT permite cambiar la dirección sin tocar el código.
export const FORM_ENDPOINT: string =
  ((import.meta as any).env?.VITE_FORMSPREE_ENDPOINT as string) || 'https://formspree.io/f/xnpdrgqq';

export async function sendInquiry(payload: Record<string, string>): Promise<boolean> {
  if (!/^https:\/\/formspree\.io\/f\/[a-z0-9]+$/i.test(FORM_ENDPOINT)) return false;
  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    });
    return response.ok;
  } catch {
    return false;
  }
}
