
import { BarChart3, Calendar, Bot, Users, DollarSign, FileText } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Dashboard Inteligente",
      description: "Visão completa da operação com gráficos de atendimento, agendamentos, cancelamentos e produtividade"
    },
    {
      icon: Calendar,
      title: "Gestão de Agendamentos",
      description: "Lista e calendário integrados com agendamento manual rápido + IA, filtros, status e ações rápidas"
    },
    {
      icon: Bot,
      title: "IA integrada via OpenAI",
      description: "Assistente treinado para agendar, confirmar e responder com parametrização: tom, tokens, reengajamento"
    },
    {
      icon: Users,
      title: "CRM Médico",
      description: "Cadastro e histórico de pacientes, retornos, sem retorno, novos pacientes com ações rápidas"
    },
    {
      icon: DollarSign,
      title: "Financeiro",
      description: "Total recebido e pendente, média por consulta, marcar pagamento com 1 clique"
    },
    {
      icon: FileText,
      title: "Relatórios",
      description: "Exportação em PDF e Excel, gráficos por período, taxa de ocupação e tendências"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-gray mb-6">
            Funcionalidades <span className="text-petrol">Detalhadas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tudo que sua clínica precisa em um só lugar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group p-8 rounded-2xl border border-gray-100 hover:border-petrol/20 hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-10 h-10 text-petrol" />
                </div>
                <h3 className="text-xl font-semibold text-dark-gray mb-4 group-hover:text-petrol transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
