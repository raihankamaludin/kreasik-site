import { Mail, MessageSquare, Linkedin, Github, Instagram } from "lucide-react";

import ContactCard from "@/components/cards/ContactCard";

export default function Contact() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        {/* LEFT */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="w-6 h-6" />
            <h2 className="text-2xl font-semibold">Connect With Me</h2>
          </div>

          <p className="text-gray-600 mb-8">
            Follow me on social media to stay updated with my projects and tech
            insights.
          </p>

          <div className="space-y-4">
            <ContactCard
              icon={<Linkedin />}
              title="LinkedIn"
              username="@Raihan Kamaludin"
              desc="Connect with me professionally."
              href="https://linkedin.com"
            />

            <ContactCard
              icon={<Github />}
              title="GitHub"
              username="@RaihanKamaludin"
              desc="Check out my open-source projects."
              href="https://github.com"
            />

            <ContactCard
              icon={<Instagram />}
              title="Instagram"
              username="@raihankmll_"
              desc="Follow me for tech updates."
              href="https://instagram.com"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border">
          <div className="flex items-center gap-3 mb-6">
            <Mail className="w-6 h-6" />
            <h2 className="text-2xl font-semibold">Send Me a Message</h2>
          </div>

          <form className="space-y-5">
            <Input label="Name *" placeholder="Your full name" />
            <Input label="Email *" placeholder="you@email.com" />
            <Input
              label="Subject"
              placeholder="Project inquiry, collaboration, etc."
            />

            <div>
              <label className="text-sm font-medium">Message *</label>
              <textarea
                rows="5"
                placeholder="Tell me about your project..."
                className="mt-2 w-full rounded-xl border px-4 py-3
                           focus:outline-none focus:ring-2 focus:ring-black/10"
              />
            </div>

            <button
              className="w-full bg-black text-white py-3 rounded-xl
                               font-medium hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* --------- INPUT --------- */
function Input({ label, placeholder }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border px-4 py-3
                   focus:outline-none focus:ring-2 focus:ring-black/10"
      />
    </div>
  );
}
