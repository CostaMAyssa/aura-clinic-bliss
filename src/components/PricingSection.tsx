import { Button } from "@/components/ui/button";
import { Puzzle, RefreshCw, Lightbulb } from "lucide-react";
import { openWhatsApp, whatsappMessages } from "@/lib/whatsapp";

const PricingSection = () => {
  const included = [
    "Código-fonte completo (Web + Bot)",
    "Instalação na sua VPS",
    "IA configurada com GPT-4 Mini",
    "Pronto para usar com sua identidade visual",
    "Suporte na instalação",
    "Documentação completa"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-gray mb-6">
            Oferta e <span className="text-petrol">Condições</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tudo que você precisa para transformar sua clínica
          </p>
        </div>

        <div className="bg-gradient-to-br from-petrol to-sage rounded-3xl p-12 text-white text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Puzzle className="w-8 h-8" />
            <h3 className="text-3xl font-bold">O que você recebe:</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {included.map((item, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white/10 rounded-lg p-4">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                <span className="text-left">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="text-6xl font-bold mb-4">R$ 1.700</div>
            <div className="text-xl mb-4">Investimento único</div>
            <div className="text-lg flex items-center justify-center gap-2">
              <RefreshCw className="w-5 h-5" />
              <span>Sem mensalidade. Sem limitações. 100% seu.</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-petrol hover:bg-gray-100 px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              onClick={() => openWhatsApp(whatsappMessages.buy)}
            >
              Comprar agora
            </Button>
            <Button 
              
              size="lg"
              className="border-white text-white hover:bg-white hover:text-petrol px-8 py-4 text-lg rounded-lg transition-all duration-300"
              onClick={() => openWhatsApp(whatsappMessages.consult)}
            >
              Falar com um especialista
            </Button>
          </div>
        </div>

        <div className="text-center text-gray-600">
         
         
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
