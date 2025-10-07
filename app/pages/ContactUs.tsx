import ContactForm from "~/components/ContactForm";

export default function ContactUsPage() {
  return <div className="p-4 flex flex-col gap-4 justify-center items-center">
    <h1 className="text-3xl font-bold">Contact Us</h1>
    <p className="text-lg">We would love to hear from you! Reach out with any questions or feedback.</p>
    <ContactForm />
  </div>;
}