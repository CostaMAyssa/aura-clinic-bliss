import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi
} from "@/components/ui/carousel";
import { useEffect, useState, useCallback } from "react";

const SystemDemo = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotation functionality with pause on hover/focus
  useEffect(() => {
    if (!api) return;

    let intervalId = setInterval(() => {
      api.scrollNext();
    }, 4000);

    const container = document.querySelector('[data-carousel-container]');
    
    const pauseAutoRotation = () => clearInterval(intervalId);
    const resumeAutoRotation = () => {
      clearInterval(intervalId);
      intervalId = setInterval(() => api.scrollNext(), 4000);
    };

    container?.addEventListener('mouseenter', pauseAutoRotation);
    container?.addEventListener('mouseleave', resumeAutoRotation);
    container?.addEventListener('focusin', pauseAutoRotation);
    container?.addEventListener('focusout', resumeAutoRotation);

    return () => {
      clearInterval(intervalId);
      container?.removeEventListener('mouseenter', pauseAutoRotation);
      container?.removeEventListener('mouseleave', resumeAutoRotation);
      container?.removeEventListener('focusin', pauseAutoRotation);
      container?.removeEventListener('focusout', resumeAutoRotation);
    };
  }, [api]);

  // Handle slide change
  const handleSlideChange = useCallback(() => {
    if (!api) return;
    setCurrentSlide(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    api.on('select', handleSlideChange);
    return () => api.off('select', handleSlideChange);
  }, [api, handleSlideChange]);

  const systemImages = [
    {
      src: "/lovable-uploads/11f3468b-9773-4838-8d2a-ba56670ecaee.png",
      alt: "Dashboard AURA - Visão geral com métricas de agendamentos e gráficos",
      title: "Dashboard Inteligente",
      description: "Visão completa da operação com gráficos de atendimento, agendamentos e produtividade"
    },
    {
      src: "/lovable-uploads/4a326c24-5ab9-4427-b241-262eca1bbe67.png",
      alt: "Agendamentos AURA - Lista e gestão de consultas",
      title: "Gestão de Agendamentos",
      description: "Lista e calendário integrados com agendamento manual rápido + IA"
    },
    {
      src: "/lovable-uploads/0f56e8b4-e1a2-41f3-8a93-3d9f2d636e74.png",
      alt: "Calendário AURA - Visualização mensal de agendamentos",
      title: "Visualização Calendário",
      description: "Interface intuitiva para gerenciar consultas por dia, semana ou mês"
    },
    {
      src: "/lovable-uploads/34efb379-633d-4033-a03a-95dfdd21e9e8.png",
      alt: "IA AURA - Configuração do assistente inteligente",
      title: "IA Integrada via OpenAI",
      description: "Assistente treinado para agendar, confirmar e responder com parametrização completa"
    },
    {
      src: "/lovable-uploads/ecee1077-f74e-441d-a28e-0885f0b33885.png",
      alt: "Pacientes AURA - CRM médico completo",
      title: "CRM Médico",
      description: "Cadastro e histórico de pacientes, retornos e novos pacientes com ações rápidas"
    },
    {
      src: "/lovable-uploads/d3aa1278-5d96-4713-aeb7-65d6b482f2d7.png",
      alt: "Financeiro AURA - Controle de recebimentos",
      title: "Controle Financeiro",
      description: "Total recebido e pendente, média por consulta, marcar pagamento com 1 clique"
    },
    {
      src: "/lovable-uploads/f058e976-c60d-4c40-99df-65dd9575834b.png",
      alt: "Relatórios AURA - Análises e estatísticas",
      title: "Relatórios Avançados",
      description: "Exportação em PDF e Excel, gráficos por período e taxa de ocupação"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-gray mb-6">
            Demonstração do <span className="text-petrol">Sistema</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Interface real do AURA em funcionamento - Design sofisticado, intuitivo e pronto para uso
          </p>
        </div>

        <div className="relative" data-carousel-container>
          <Carousel 
            setApi={setApi}
            className="w-full max-w-5xl mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
            aria-label="Demonstração do sistema AURA"
          >
            <CarouselContent>
              {systemImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div 
                    className="bg-white rounded-2xl shadow-2xl p-4 border border-gray-100"
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${index + 1} de ${systemImages.length}`}
                  >
                    <div className="flex items-center mb-4">
                      <div className="flex space-x-2" aria-hidden="true">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="ml-4 text-sm text-gray-500">AURA Dashboard</div>
                    </div>
                    
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto object-contain"
                        loading="lazy"
                        width={800}
                        height={600}
                        fetchPriority={index === 0 ? "high" : "low"}
                      />
                    </div>
                    
                    <div className="mt-6 text-center">
                      <h3 className="text-xl font-semibold text-dark-gray mb-2">
                        {image.title}
                      </h3>
                      <p className="text-gray-600">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious 
              className="left-4" 
              aria-label="Slide anterior"
            />
            <CarouselNext 
              className="right-4"
              aria-label="Próximo slide"
            />
          </Carousel>
          
          <div 
            className="flex justify-center mt-8 space-x-2"
            role="tablist"
            aria-label="Navegação dos slides"
          >
            {systemImages.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  currentSlide === index ? 'bg-petrol' : 'bg-gray-300 hover:bg-petrol/60'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
                aria-selected={currentSlide === index}
                role="tab"
                tabIndex={currentSlide === index ? 0 : -1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemDemo;
