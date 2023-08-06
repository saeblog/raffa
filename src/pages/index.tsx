import { Hero } from "../components/Hero";
import Layout from "../components/Layout";
import Pricing from "../components/Pricing";
import { Features } from "../components/Features";
import { Services } from "../components/Services";
import Faq from "../components/Faq";
import Customers from "../components/Customers";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Features />
      <Pricing />
      <Faq />
      <ContactForm />
      <Customers />
    </Layout>
  );
}
