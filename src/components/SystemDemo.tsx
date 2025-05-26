
const SystemDemo = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-gray mb-6">
            Demonstração do <span className="text-petrol">Sistema</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Design sofisticado, intuitivo e pronto para uso em qualquer dispositivo
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="ml-4 text-sm text-gray-500">AURA Dashboard</div>
              </div>
              
              <div className="space-y-4">
                <div className="h-4 bg-petrol rounded w-1/3"></div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-16 bg-sage/20 rounded-lg flex items-center justify-center">
                    <div className="text-2xl font-bold text-petrol">24</div>
                  </div>
                  <div className="h-16 bg-sage/20 rounded-lg flex items-center justify-center">
                    <div className="text-2xl font-bold text-petrol">12</div>
                  </div>
                  <div className="h-16 bg-sage/20 rounded-lg flex items-center justify-center">
                    <div className="text-2xl font-bold text-petrol">98%</div>
                  </div>
                </div>
                <div className="h-32 bg-gradient-to-r from-petrol/10 to-sage/10 rounded-lg"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-3 bg-gray-200 rounded w-4/6"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-petrol rounded-lg flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark-gray mb-2">Dashboard Inteligente</h3>
                <p className="text-gray-600">Visão completa da operação com gráficos de atendimento, agendamentos e produtividade</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-sage rounded-lg flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark-gray mb-2">Gestão Simplificada</h3>
                <p className="text-gray-600">Lista e calendário integrados com agendamento manual rápido + IA</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-petrol rounded-lg flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark-gray mb-2">Relatórios Avançados</h3>
                <p className="text-gray-600">Exportação em PDF e Excel com análises por período e taxa de ocupação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemDemo;
