import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { MenuSection } from "@/components/MenuSection";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { 
  ArrowRight, 
  Instagram, 
  Leaf, 
  UtensilsCrossed, 
  ChefHat, 
  Heart,
  CalendarCheck,
  ShoppingBasket,
  Refrigerator
} from "lucide-react";

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <Badge variant="outline" className="border-primary/30 text-primary px-4 py-1 rounded-full text-sm font-medium tracking-wide bg-white/50 backdrop-blur-sm">
              Personal Chef & Gastronomia Funcional
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.1]">
              Cozinhar com <br/>
              <span className="text-primary italic">Afeto</span> e <span className="text-primary italic">Dedicação</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              "Minha paixão pela culinária nasceu nos almoços em família, onde os sabores que saíam da cozinha da minha vó despertaram em mim o desejo de cozinhar com afeto."
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 h-12 text-base shadow-lg shadow-primary/25 hover:shadow-xl transition-all" onClick={() => window.open("https://wa.me/5511999999999", "_blank")}>
                Agendar pelo WhatsApp
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full border-primary/20 hover:bg-secondary/50 h-12 text-base px-8" onClick={() => document.getElementById('menus')?.scrollIntoView({ behavior: 'smooth' })}>
                Ver Cardápios
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* Image Container with organic shape mask */}
            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] max-h-[700px] rounded-3xl overflow-hidden shadow-2xl">
              {/* Overlay for text legibility if needed, or subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 mix-blend-overlay" />
              
              {/* Descriptive comment for Unsplash image */}
              {/* professional female chef cooking healthy food in bright kitchen with vegetables */}
              <img 
                src="https://pixabay.com/get/g2b9aabff39d3f20c0ba9f65b52d29924338a83bb8c1eafc303dc26dd2fb64c50a101acc90f5b87f5c86f9ae49e91001ba4f3ec2cff6bdc1edc8cb326ea5a9956_1280.jpg" 
                alt="Chef Ariel Bilica Cooking" 
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-8 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
              <div className="bg-green-100 p-3 rounded-full text-green-700">
                <Leaf className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Especialidade</p>
                <p className="font-display font-bold text-lg">Culinária Saudável</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="order-2 md:order-1 relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-8">
                  {/* healthy food plating details */}
                  <img src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1000&auto=format&fit=crop" className="rounded-2xl shadow-lg w-full h-48 object-cover" alt="Prato saudável" />
                  {/* fresh vegetables market */}
                  <img src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=1000&auto=format&fit=crop" className="rounded-2xl shadow-lg w-full h-64 object-cover" alt="Ingredientes frescos" />
                </div>
                <div className="space-y-4">
                  {/* chef preparing meal detail */}
                  <img src="https://pixabay.com/get/g604578f7296d0f269f47eb1e2d6d3b7b5b3131228711ba180d9b13d12fd2f6382c51adad657144afd6d8a4369080b35c83753c510fd9d7f03afc04d3c6be78eb_1280.jpg" className="rounded-2xl shadow-lg w-full h-64 object-cover" alt="Preparando com carinho" />
                  {/* healthy dessert */}
                  <img src="https://pixabay.com/get/gd81160f0a0a89c1e598dfd6443b6a81fb440fcbfa0caf92f350b90ee9cfb788ecdfdd64316702e9c1b6f3f3deaf24f433965e391f932dda80b798366d2326308_1280.jpg" className="rounded-2xl shadow-lg w-full h-48 object-cover" alt="Sobremesas saudáveis" />
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2 space-y-6"
            >
              <Badge variant="secondary" className="bg-secondary/50 text-secondary-foreground">Quem sou eu</Badge>
              <h2 className="text-4xl font-display font-bold">Chef Ariel Bilica</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Tenho 27 anos, sou casada e mãe da Lua e da Alice. Minha família é nordestina, e carrego essa herança de sabores e hospitalidade no meu sangue.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Formada em Gastronomia e Personal Chef pela Escola Fran Tonello, atuo há 3 anos transformando a alimentação das famílias com praticidade e saúde.
              </p>
              
              <div className="pt-4">
                <h3 className="font-bold text-lg mb-3 font-display">Minhas Especializações:</h3>
                <div className="flex flex-wrap gap-2">
                  {["Gastronomia Funcional", "Chef Vegan e Plant Based", "Pães e Massas Frescas", "Confeitaria Saudável", "Tortas e Quiches"].map((tag) => (
                    <Badge key={tag} variant="outline" className="border-primary/40 text-primary-foreground bg-primary/80 py-1.5 px-3">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section id="process" className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Como Funciona?</h2>
            <p className="text-muted-foreground">
              Um serviço completo para que você só tenha o trabalho de abrir a geladeira e aproveitar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <CalendarCheck className="w-10 h-10 text-primary" />,
                title: "1. Planejamento",
                desc: "Cardápio 100% personalizado após anamnese detalhada. Envio da lista completa de compras e orientações de substituições."
              },
              {
                icon: <UtensilsCrossed className="w-10 h-10 text-primary" />,
                title: "2. Execução",
                desc: "Vou até sua casa e preparo todas as receitas utilizando técnicas profissionais. Posso usar seus utensílios ou levar os meus."
              },
              {
                icon: <Refrigerator className="w-10 h-10 text-primary" />,
                title: "3. Finalização",
                desc: "Deixo tudo limpo e organizado. Faço o descarte adequado de resíduos e armazeno tudo corretamente na sua geladeira ou freezer."
              }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow text-center space-y-4"
              >
                <div className="bg-secondary/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold font-display">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Serviços e Valores</h2>
            <p className="text-muted-foreground">
              Escolha o pacote ideal para sua rotina e necessidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <ServiceCard 
              title="Express"
              price="R$ 150"
              hours="3h"
              features={[
                "Até 4 preparos simples",
                "Cardápio personalizado",
                "Lista de compras",
                "Ideal para quem mora sozinho"
              ]}
            />
            <ServiceCard 
              title="Marmitas"
              price="R$ 350"
              hours="8h"
              recommended={true}
              features={[
                "30 unidades de marmitas",
                "Até 10 preparos diferentes",
                "Porcionamento individual",
                "Etiquetas de validade",
                "Cardápio completo"
              ]}
            />
            <ServiceCard 
              title="Diária"
              price="R$ 250"
              hours="6h"
              features={[
                "Até 7 preparos",
                "Inclui 1 sobremesa cortesia",
                "Cardápio versátil",
                "Ideal para famílias"
              ]}
            />
          </div>
          
          <div className="text-center mt-12 text-sm text-muted-foreground bg-secondary/20 p-4 rounded-xl max-w-2xl mx-auto">
            <p>* Valores de lançamento válidos até 31/03/2026.</p>
            <p>* Hora extra: R$ 40,00.</p>
          </div>
        </div>
      </section>

      {/* MENUS SECTION */}
      <MenuSection />

      {/* CTA SECTION */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Transforme sua alimentação hoje
            </h2>
            <p className="text-primary-foreground/80 text-lg md:text-xl">
              Ficou alguma dúvida ou quer personalizar um pacote especial? 
              Entre em contato, será um prazer cozinhar para você.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto h-14 px-8 text-lg rounded-full gap-2 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300" onClick={() => window.open("https://wa.me/5511999999999", "_blank")}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-6 h-6" />
                Chamar no WhatsApp
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg rounded-full gap-2 bg-transparent text-white border-white/40 hover:bg-white/10" onClick={() => window.open("https://instagram.com", "_blank")}>
                <Instagram className="w-6 h-6" />
                Seguir no Instagram
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-muted py-12 border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <ChefHat className="w-6 h-6 text-primary" />
              <span className="font-display font-bold text-xl text-foreground">Ariel Bilica</span>
            </div>
            
            <p className="text-sm text-muted-foreground text-center md:text-right">
              &copy; {new Date().getFullYear()} Ariel Bilica Personal Chef. <br className="md:hidden"/>
              Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
