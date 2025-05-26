
const TestimonialSection = () => {
  return (
    <section className="py-20 bg-sage/10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-white rounded-2xl shadow-xl p-12 border border-gray-100">
          <div className="text-6xl text-sage mb-8">"</div>
          <blockquote className="text-2xl md:text-3xl text-dark-gray mb-8 leading-relaxed italic">
            Desde que implementamos o AURA, nossas faltas caíram, o atendimento ficou mais rápido e não precisamos mais de uma agenda separada.
          </blockquote>
          
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-petrol to-sage rounded-full flex items-center justify-center text-white font-bold text-xl">
              L
            </div>
            <div className="text-left">
              <div className="font-semibold text-dark-gray text-lg">Dra. Larissa Andrade</div>
              <div className="text-gray-600">Ginecologista</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
