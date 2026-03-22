const PHONE = "5219933979863";

export const getWhatsAppLink = (message = "") => {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
};
