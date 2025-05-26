
const Footer = () => {
  return (
    <footer className="bg-dark-gray text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-petrol mb-4">AURA</h3>
            <p className="text-gray-300 leading-relaxed">
              Sistema inteligente de agendamento para clínicas modernas. 
              Automatize, simplifique e cresça.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-gray-300">
              <p>📧 contato@aurasystem.com.br</p>
              <p>📱 (11) 99999-9999</p>
              <p>🕒 Seg-Sex: 9h às 18h</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Suporte</h4>
            <div className="space-y-2 text-gray-300">
              <p>📖 Documentação</p>
              <p>🛠️ Instalação</p>
              <p>💬 Chat direto</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 AURA System. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
