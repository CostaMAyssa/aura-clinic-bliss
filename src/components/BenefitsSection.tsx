
import { Lightbulb, Clock, BarChart3, Shield } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Lightbulb,
      title: "Agendamento com IA",
      description: "O assistente coleta dados do paciente e agenda automaticamente."
    },
    {
      icon: Clock,
      title: "Lembretes Inteligentes",
      description: "Envio automático de confirmações e lembretes no WhatsApp."
    },
    {
      icon: BarChart3,
      title: "Painel Gerencial Completo",
      description: "Tudo sobre sua clínica em tempo real: ocupação, faturamento e consultas."
    },
    {
      icon: Shield,
      title: "Privacidade e Segurança",
      description: "Código-fonte seu, com instalação segura na sua VPS."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-gray mb-6">
            Por que escolher o <span className="text-petrol">AURA</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma solução completa que transforma a gestão da sua clínica
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="mb-6 flex justify-center">
                  <IconComponent className="w-12 h-12 text-petrol" />
                </div>
                <h3 className="text-xl font-semibold text-dark-gray mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
