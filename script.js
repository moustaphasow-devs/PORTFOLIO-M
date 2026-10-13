// Remplacez par votre numéro WhatsApp personnel ou professionnel
const WHATSAPP_NUMBER = "+224610132773";

function contacterWhatsApp() {
    const message = "Bonjour Moustapha, j'ai visité ton portfolio et je souhaite qu'on discute d'un projet web.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
}