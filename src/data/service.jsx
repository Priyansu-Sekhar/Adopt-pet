import {
  Award,
  Heart,
  Scissors,
  Shield,
  ShoppingBag,
  Users,
} from "lucide-react";
import Hamster from "../assets/Hamster.png";
import Kitty from "../assets/Kitty.png";
import Tommy from "../assets/Tommy.png";
import Rabbit from "../assets/Rabbit3.png";
import Bird from "../assets/Bird4.png";
import Henry from "../assets/Henry.png";

const services = [
  {
    id: 1,
    title: "Animal Training",
    description: "Positive and patient training sessions for better behavior and bonding.",
    icon: Award,
    accent: "from-[#6b5e52] to-[#8e7761]",
    image: Hamster,
    imageAlt: "Hamster sitting on a wooden surface",
  },
  {
    id: 2,
    title: "Pet Supplies",
    description: "Food, toys, hygiene products, and essentials picked for every pet type.",
    icon: ShoppingBag,
    accent: "from-[#8d6b4a] to-[#b58a65]",
    image: Kitty,
    imageAlt: "Orange cat with bright eyes",
  },
  {
    id: 3,
    title: "Animal Adoption",
    description: "A guided adoption process that helps you meet and welcome your companion.",
    icon: Heart,
    accent: "from-[#5d5d5d] to-[#7b7b7b]",
    image: Tommy,
    imageAlt: "Small dog waiting for adoption",
  },
  {
    id: 4,
    title: "Pet Grooming",
    description: "Bathing, coat care, and grooming support to keep pets healthy and happy.",
    icon: Scissors,
    accent: "from-[#7d6149] to-[#9b7a5c]",
    image: Rabbit,
    imageAlt: "Rabbit with clean fluffy coat",
  },
  {
    id: 5,
    title: "Animal Rescue",
    description: "Quick response and rehabilitation support for animals in urgent situations.",
    icon: Shield,
    accent: "from-[#4d4d4d] to-[#666666]",
    image: Bird,
    imageAlt: "Parrot standing on a branch",
  },
  {
    id: 6,
    title: "Pet Sitter",
    description: "Reliable short-term care when you travel, work late, or need extra help.",
    icon: Users,
    accent: "from-[#7a6654] to-[#9f8570]",
    image: Henry,
    imageAlt: "Dog looking calm and comfortable",
  },
];

export default services;