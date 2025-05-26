
const WhatsAppSection = () => {
  return (
    <section className="py-20 bg-petrol text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Integração com <span className="text-sage">WhatsApp + IA</span>
          </h2>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            Transforme o WhatsApp da sua clínica em um canal de agendamento 24h com inteligência artificial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">O bot AURA:</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-sage rounded-full"></div>
                  <span>Atende o paciente via WhatsApp</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-sage rounded-full"></div>
                  <span>Coleta nome, motivo e confirma a consulta</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-sage rounded-full"></div>
                  <span>Apresenta horários disponíveis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-sage rounded-full"></div>
                  <span>Reengaja automaticamente</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-sage rounded-full"></div>
                  <span>Envia tudo para o painel AURA Web</span>
                </div>
              </div>
            </div>
            
            <div className="bg-sage/20 backdrop-blur-sm rounded-2xl p-6">
              <p className="text-lg">
                🧠 <strong>Treinado com GPT-4 Mini</strong>, o assistente é educado, rápido e confiável.
              </p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="bg-green-500 rounded-t-2xl p-4 mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-green-500 font-bold">A</span>
                </div>
                <span className="font-semibold">AURA Assistant</span>
              </div>
            </div>
            
            <div className="space-y-4 text-sm">
              <div className="bg-white/20 rounded-lg p-3">
                <strong>AURA:</strong> Olá! Sou a assistente da clínica. Como posso ajudá-lo?
              </div>
              <div className="bg-blue-500/30 rounded-lg p-3 ml-8">
                <strong>Paciente:</strong> Gostaria de agendar uma consulta
              </div>
              <div className="bg-white/20 rounded-lg p-3">
                <strong>AURA:</strong> Perfeito! Qual seu nome completo?
              </div>
              <div className="bg-blue-500/30 rounded-lg p-3 ml-8">
                <strong>Paciente:</strong> Maria Silva
              </div>
              <div className="bg-white/20 rounded-lg p-3">
                <strong>AURA:</strong> Ótimo, Maria! Tenho os seguintes horários disponíveis...
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppSection;
