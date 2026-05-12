import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { motion } from "motion/react";

export function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Pre-fill WhatsApp message
    const message = `Hi Kolath Medicals, I'm ${formData.name}. %0AEmail: ${formData.email}%0APhone: ${formData.number}%0ARequirement: ${formData.message}`;
    const whatsappUrl = `https://wa.me/919496358682?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="w-full max-w-md bg-slate-900 border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-primary/10 blur-3xl rounded-full" />
        <CardHeader>
          <CardTitle className="text-2xl font-display font-bold text-white">Get a Quick Quote</CardTitle>
          <CardDescription className="text-slate-400 text-sm">
            Fill the form below and our medical specialist will reach out to you via WhatsApp immediately.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="name" className="text-xs font-semibold text-slate-500 uppercase ml-1">Full Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-slate-950 border-slate-800 text-slate-200 focus-visible:ring-brand-primary rounded-xl px-4 py-6"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="email" className="text-xs font-semibold text-slate-500 uppercase ml-1">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-slate-950 border-slate-800 text-slate-200 focus-visible:ring-brand-primary rounded-xl px-4 py-6"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="number" className="text-xs font-semibold text-slate-500 uppercase ml-1">Mobile Number</Label>
                <Input
                  id="number"
                  name="number"
                  type="tel"
                  placeholder="+91 98765 43210"
                  required
                  value={formData.number}
                  onChange={handleChange}
                  className="bg-slate-950 border-slate-800 text-slate-200 focus-visible:ring-brand-primary rounded-xl px-4 py-6"
                />
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="message" className="text-xs font-semibold text-slate-500 uppercase ml-1">Requirement Details</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="List the medical equipment or surgical supplies you need..."
                required
                value={formData.message}
                onChange={handleChange}
                className="bg-slate-950 border-slate-800 text-slate-200 focus-visible:ring-brand-primary rounded-xl min-h-[100px] resize-none px-4 py-3"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full bg-brand-primary hover:bg-emerald-400 text-slate-950 font-bold py-6 rounded-xl shadow-lg shadow-emerald-500/20 transition-all active:scale-[0.98] text-lg">
              <span>Send Requirements</span>
              <Send className="ml-2 h-5 w-5" />
            </Button>
          </CardFooter>
        </form>
      </Card>
    </motion.div>
  );
}
