export const WHATSAPP_NUMBER = "573233058573";

export const ACADEMY_NAME = "Fluent Path";

export const ACADEMY_TAGLINE = "English for Specific Purposes";

export function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
