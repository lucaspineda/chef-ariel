import { useMutation } from "@tanstack/react-query";
import { api, type InsertInquiry } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateInquiry() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      // In a real app with backend, this would make the API call
      // const res = await fetch(api.inquiries.create.path, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(data),
      // });
      // if (!res.ok) throw new Error("Failed to send inquiry");
      // return res.json();
      
      // For this static demo, simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { success: true };
    },
    onSuccess: () => {
      toast({
        title: "Mensagem enviada!",
        description: "Entrarei em contato em breve.",
      });
    },
    onError: () => {
      toast({
        title: "Erro ao enviar",
        description: "Por favor, tente novamente ou use o WhatsApp.",
        variant: "destructive",
      });
    }
  });
}
