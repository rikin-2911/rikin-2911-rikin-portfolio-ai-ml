import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { FormEvent, useState } from "react";
import { Instagram, Github, Linkedin, Globe, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { socials } from "@/data/portfolio";

const Contact = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Message queued ✓",
        description: "Thanks for reaching out — I will get back to you soon.",
      });
    }, 700);
  };

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_6j6jpik",
        "template_fq8yra6",
        form.current,
        "ibpYDB6A-qJDSRbHe"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          alert("Failed to send message");
          console.log(error);
        }
      );
  };
  return (
    <section id="contact" className="py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="font-mono text-sm text-neon-blue/80">
            <span className="text-neon-red">$</span> ssh rikin@ai-lab
          </p>
          <h2 className="font-mono text-3xl md:text-4xl font-bold mt-2 text-gradient-neon">
            Contact
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <form ref={form} onSubmit={sendEmail} className="glass-card neon-border-blue rounded-xl p-6 space-y-4">
            <div>
              <label className="font-mono text-xs text-muted-foreground">
                <span className="text-neon-red">~/</span>name
              </label>
              <Input
                required
                name="user_name"
                placeholder="your name"
                className="mt-1 bg-background/60 border-neon-blue/30 font-mono focus-visible:ring-neon-blue"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-muted-foreground">
                <span className="text-neon-red">~/</span>email
              </label>
              <Input
                required
                type="email"
                name="user_email"
                placeholder="you@domain.com"
                className="mt-1 bg-background/60 border-neon-blue/30 font-mono focus-visible:ring-neon-blue"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-muted-foreground">
                <span className="text-neon-red">~/</span>message
              </label>
              <Textarea
                required
                name="message"
                rows={5}
                placeholder="echo 'hello rikin...'"
                className="mt-1 bg-background/60 border-neon-blue/30 font-mono focus-visible:ring-neon-blue"
              />
            </div>
            <Button
              type="submit"
              disabled={sending}
              className="bg-neon-red text-background hover:bg-neon-red/90 shadow-neon-red font-mono w-full"
            >
              <Send className="w-4 h-4" /> {sending ? "transmitting..." : "send message"}
            </Button>
          </form>

          <div className="flex flex-col gap-4">
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="glass-card rounded-xl p-5 flex items-center gap-4 hover-glow-blue group"
            >
              <span className="w-11 h-11 rounded-lg flex items-center justify-center bg-neon-blue/10 border border-neon-blue/40 text-neon-blue">
                <Linkedin className="w-5 h-5" />
              </span>
              <div className="flex-1">
                <p className="font-mono text-sm text-neon-blue">LinkedIn</p>
                <p className="text-xs text-muted-foreground truncate">Rikin Pithadia</p>
              </div>
            </a>
            <a
              href={socials.Instagram}
              target="_blank"
              rel="noreferrer noopener"
              className="glass-card rounded-xl p-5 flex items-center gap-4 hover-glow-blue group"
            >
              <span className="w-11 h-11 rounded-lg flex items-center justify-center bg-neon-red/10 border border-neon-red/40 text-neon-red">
                <Instagram className="w-5 h-5" />
              </span>
              <div className="flex-1">
                <p className="font-mono text-sm text-neon-red">Instagram</p>
                <p className="text-xs text-muted-foreground truncate">rikin_2911</p>
              </div>
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer noopener"
              className="glass-card rounded-xl p-5 flex items-center gap-4 hover-glow-blue group"
            >
              <span className="w-11 h-11 rounded-lg flex items-center justify-center bg-neon-violet/10 border border-neon-violet/40 text-neon-violet">
                <Github className="w-5 h-5" />
              </span>
              <div className="flex-1">
                <p className="font-mono text-sm text-neon-violet">GitHub</p>
                <p className="text-xs text-muted-foreground truncate">rikin-2911</p>
              </div>
            </a>
            <a
              href={socials.email}
              target="_blank"
              rel="noreferrer noopener"
              className="glass-card rounded-xl p-5 flex items-center gap-4 hover-glow-blue group"
            >
              <span className="w-11 h-11 rounded-lg flex items-center justify-center bg-neon-red/10 border border-neon-red/40 text-neon-red">
                <Globe className="w-5 h-5" />
              </span>
              <div className="flex-1">
                <p className="font-mono text-sm text-neon-red">Email</p>
                <p className="text-xs text-muted-foreground truncate">rikinpithadia98@gmail.com</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;