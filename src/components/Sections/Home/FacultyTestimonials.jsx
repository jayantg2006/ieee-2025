import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    quote: "The only way to do great work is to love what you do.",
    name: "Dr. Prema Gaur",
    designation: "IEEE Member",
    src: "../src/assets/Dr. Prema Gaur.jpg",
  },
  {
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    name: "Dr. Anuradha Tomar",
    designation: "IEEE Member",
    src: "../src/assets/Dr. Anuradha Tomar.jpg",
  },
  {
    quote:
      "IEEE has been instrumental in my career, providing a platform to collaborate with peers and stay updated on analog electronics. Being recognized as an IEEE Fellow is an honor, and I’m grateful for the chance to contribute to the IEEE CAS Society. IEEE continues to inspire innovation and excellence in engineering.",
    name: "Prof. Raj Senani",
    designation: "IEEE Member",
    src: "../src/assets/Prof. Raj Samani.jpg",
  },
  {
    quote:
      "My association with IEEE has been key to my growth as a computer engineer. The conferences and workshops expanded my knowledge and connected me with industry leaders. Publishing in IEEE journals gave my research global visibility, and I’m proud to be part of this prestigious organization.",
    name: "Dr. Rakesh Kumar",
    designation: "IEEE Member",
    src: "../src/assets/Dr. Rakesh Kumar.jpg",
  },
  {
    quote:
      "IEEE has been a fantastic platform for advancing my career and contributing to engineering. The Women in Engineering (WIE) initiatives have been especially inspiring, encouraging more women to pursue STEM careers. The wealth of resources and vibrant community make IEEE an invaluable part of my professional life.",
    name: "Dr. Neeta Pandey",
    designation: "IEEE Member",
    src: "../src/assets/Dr. Neeta Pandey.png",
  },
  {
    quote:
      "IEEE has been crucial to my growth in power electronics and renewable energy. Through its committees and conferences, I’ve collaborated with global experts and stayed at the forefront of technology. IEEE’s commitment to innovation is commendable.",
    name: "Dr. Sanjeev Jain",
    designation: "IEEE Member",
    src: "../src/assets/Dr. Sanjeev Jain.png",
  },
  {
    quote:
      "IEEE has been essential to my growth in computer science and engineering. Its support through conferences, publications, and resources is unmatched, offering countless opportunities to grow, collaborate, and contribute to the field.",
    name: "Prof. Yogesh Singh",
    designation: "IEEE Member",
    src: "../src/assets/Prof. Yogesh Singh.jpg",
  },
];

export default function FacultyTestimonials() {
  return <AnimatedTestimonials testimonials={testimonials} />;
}
