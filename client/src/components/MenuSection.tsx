import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Utensils, Leaf, Fish, Beef, WheatOff, Coffee } from "lucide-react";

interface MenuItem {
  name: string;
  description: string;
  tags?: string[];
}

interface MenuCategory {
  id: string;
  label: string;
  icon: React.ReactNode;
  items: MenuItem[];
}

const menuCategories: MenuCategory[] = [
  {
    id: "frango",
    label: "Aves",
    icon: <Utensils className="w-4 h-4 mr-2" />,
    items: [
      { name: "Peito de Frango Recheado", description: "Ao molho de mostarda e alcaparras", tags: ["Proteico"] },
      { name: "Polpetone Cetogênico", description: "Assado e suculento com queijo", tags: ["Keto", "Low Carb"] },
      { name: "Strogonoff Funcional", description: "Com brócolis e creme de castanhas", tags: ["Sem Lactose"] },
      { name: "Frango Thai", description: "Cubos de frango com leite de coco e curry", tags: ["Exótico"] },
    ]
  },
  {
    id: "carnes",
    label: "Carnes",
    icon: <Beef className="w-4 h-4 mr-2" />,
    items: [
      { name: "Quibe de Carne", description: "Com couve flor e hortelã fresca", tags: ["Low Carb"] },
      { name: "Fraldinha de Panela", description: "Cozida lentamente com ervas finas", tags: ["Clássico"] },
      { name: "Ossobuco ao Vinho", description: "Desmanchando, servido com seu molho", tags: ["Premium"] },
      { name: "Strogonoff de Carne", description: "Com mix de cogumelos frescos", tags: ["Favorito"] },
    ]
  },
  {
    id: "peixes",
    label: "Peixes",
    icon: <Fish className="w-4 h-4 mr-2" />,
    items: [
      { name: "Saint Peter no Amaranto", description: "Empanado em crosta crocante de amaranto", tags: ["Sem Glúten"] },
      { name: "Robalo em Crosta Nuts", description: "Castanhas e ervas aromáticas", tags: ["Premium"] },
      { name: "Camarão Flambado", description: "Ao molho de coco e especiarias", tags: ["Especial"] },
      { name: "Moqueca Capixaba", description: "Tradicional, leve e saborosa", tags: ["Regional"] },
    ]
  },
  {
    id: "vegetariano",
    label: "Vegano",
    icon: <Leaf className="w-4 h-4 mr-2" />,
    items: [
      { name: "Espaguete de Abobrinha", description: "Com pesto cremoso de avocado", tags: ["Raw", "Vegano"] },
      { name: "Picadinho de Tofu", description: "Defumado com legumes da estação", tags: ["Proteico"] },
      { name: "Quibe de Quinoa", description: "Com abóbora cabotiá assada", tags: ["Sem Glúten"] },
      { name: "Curry de Grão de Bico", description: "Com espinafre e leite de coco", tags: ["Conforto"] },
    ]
  },
  {
    id: "massas",
    label: "Sem Glúten",
    icon: <WheatOff className="w-4 h-4 mr-2" />,
    items: [
      { name: "Nhoque de Abóbora", description: "Recheado de gorgonzola ao sugo", tags: ["Artesanal"] },
      { name: "Agnolotti na Ghee", description: "Massa fresca puxada na manteiga ghee e sálvia", tags: ["Delicado"] },
      { name: "Talharim Aioli", description: "Massa de arroz com alho e azeite", tags: ["Leve"] },
      { name: "Lasanha de Berinjela", description: "Camadas de berinjela grelhada e molho caseiro", tags: ["Low Carb"] },
    ]
  },
  {
    id: "extras",
    label: "Extras",
    icon: <Coffee className="w-4 h-4 mr-2" />,
    items: [
      { name: "Batatas Gratinadas", description: "Ao creme de queijo sem lactose", tags: ["Acompanhamento"] },
      { name: "Muffins Caprese", description: "Tomate seco, manjericão e queijo", tags: ["Lanche"] },
      { name: "Bolo de Cenoura", description: "Sem glúten com calda de cacau 70%", tags: ["Sobremesa"] },
      { name: "Panacotta Zero", description: "Zero lácteos com calda de frutas vermelhas", tags: ["Sobremesa"] },
    ]
  }
];

export function MenuSection() {
  const [activeTab, setActiveTab] = useState("frango");

  return (
    <section id="menus" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5">
            Sabores
          </Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Cardápios Personalizados
          </h2>
          <p className="text-muted-foreground">
            Do clássico ao funcional, cada prato é elaborado pensando no seu paladar e restrições alimentares.
          </p>
        </div>

        <Tabs defaultValue="frango" className="w-full max-w-4xl mx-auto" onValueChange={setActiveTab}>
          <div className="overflow-x-auto pb-4 scrollbar-hide">
            <TabsList className="h-auto w-auto inline-flex p-1 bg-white/50 backdrop-blur border border-border/50 rounded-full">
              {menuCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="rounded-full px-4 py-2 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                >
                  {category.icon}
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="mt-8">
            {menuCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {category.items.map((item, idx) => (
                    <Card key={idx} className="border-border/50 hover:border-primary/30 transition-all hover:shadow-md bg-white/80">
                      <CardHeader className="p-4 md:p-6 pb-2">
                        <div className="flex justify-between items-start gap-2">
                          <CardTitle className="text-lg font-display text-primary-dark">
                            {item.name}
                          </CardTitle>
                          {item.tags && item.tags.length > 0 && (
                            <Badge variant="secondary" className="text-xs shrink-0 bg-secondary text-secondary-foreground font-normal">
                              {item.tags[0]}
                            </Badge>
                          )}
                        </div>
                        <CardDescription className="text-sm">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                  
                  <div className="col-span-1 md:col-span-2 flex justify-center mt-6">
                    <p className="text-sm text-muted-foreground italic font-handwriting text-xl">
                      ...e muito mais opções personalizadas para você!
                    </p>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
