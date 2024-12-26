'use client';

import { Gauge, Shield, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: <Gauge className="h-6 w-6" />,
    title: "Deep Liquidity Access",
    description: "Aggregate liquidity across multiple providers"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Lower slippage",
    description: "Minimize price discrepancies across platforms"
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Wider Token selection",
    description: "Access a broad range of assets"
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "User-friendly Interface",
    description: "Designed for both beginners and advanced traders"
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Features
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="group h-56 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}