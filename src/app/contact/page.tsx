import { ContactForm } from "../../components/contact-form";

export default function ContactPage() {
  return (
    <main className="py-24 min-h-screen bg-green-600" id="contact">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-12 text-center mt-10 text-white">
          <h1 className="text-3xl font-bold mb-4">お問い合わせ</h1>
          <p className="text-gray-100 font-bold">
            セミナーに関するお問い合わせやご相談は、下記フォームよりお願いいたします。
          </p>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
