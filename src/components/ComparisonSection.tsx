
const ComparisonSection = () => {
  const comparisons = [
    {
      aura: "Agendamento automático",
      traditional: "Manual e demorado"
    },
    {
      aura: "Lembretes automáticos",
      traditional: "Exige acompanhamento"
    },
    {
      aura: "Visualização em tempo real",
      traditional: "Nenhuma"
    },
    {
      aura: "Atendimento 24h com IA",
      traditional: "Limitado ao horário comercial"
    },
    {
      aura: "Sistema é seu (código-fonte)",
      traditional: "Dependência de terceiros"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-gray mb-6">
            <span className="text-petrol">AURA</span> vs Métodos Tradicionais
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja a diferença que a tecnologia pode fazer na sua clínica
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-petrol text-white p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">AURA</h3>
              <div className="space-y-4">
                {comparisons.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg">
                    <div className="w-2 h-2 bg-sage rounded-full flex-shrink-0"></div>
                    <span className="text-sm md:text-base">{item.aura}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-100 text-dark-gray p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Planilhas / Agenda física</h3>
              <div className="space-y-4">
                {comparisons.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white/50 rounded-lg">
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                    <span className="text-sm md:text-base text-gray-600">{item.traditional}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
