import { Button } from "@/components/ui/button";
import { openWhatsApp, whatsappMessages } from "@/lib/whatsapp";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-dark-gray mb-6 leading-tight">
            <span className="text-petrol">AURA</span> — Seu sistema
            <br />
            inteligente de agendamento
            <br />
            para <span className="text-sage">clínicas modernas</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
            Automatize consultas, reduza faltas e encante seus pacientes com um sistema leve, elegante e completo.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-petrol hover:bg-petrol/90 text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            onClick={() => openWhatsApp(whatsappMessages.interest)}
          >
            Quero o AURA na minha clínica
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-petrol text-petrol hover:bg-petrol hover:text-white px-8 py-4 text-lg rounded-lg transition-all duration-300"
          >
            Ver funcionalidades
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
          <div className="text-center">
            <div className="text-4xl font-bold text-petrol mb-2">24h</div>
            <p className="text-gray-600">Atendimento automático</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-petrol mb-2">-50%</div>
            <p className="text-gray-600">Redução de faltas</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-petrol mb-2">100%</div>
            <p className="text-gray-600">Seu sistema</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-petrol mb-2">0</div>
            <p className="text-gray-600">Mensalidade</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
