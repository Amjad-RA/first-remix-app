import ContactUsPage from "~/pages/ContactUs";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Page" },
    { name: "description", content: "Contact Page: My First Remix App" },
  ];
}

export default function Contact() {
  return <ContactUsPage />;
}
