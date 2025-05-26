const WHATSAPP_NUMBER = "5564981140676";

export const createWhatsAppUrl = (message: string): string => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const openWhatsApp = (message: string): void => {
  const url = createWhatsAppUrl(message);
  window.open(url, '_blank');
};

export const whatsappMessages = {
  interest: "Olá! Tenho interesse no sistema AURA para minha clínica. Gostaria de saber mais informações.",
  buy: "Olá! Quero comprar o sistema AURA para minha clínica. Gostaria de finalizar a compra.",
  consult: "Olá! Gostaria de falar com um especialista sobre o sistema AURA. Tenho algumas dúvidas.",
  demo: "Olá! Gostaria de ver uma demonstração do sistema AURA. Quando podemos agendar?",
  support: "Olá! Preciso de suporte técnico para o sistema AURA. Podem me ajudar?"
}; 