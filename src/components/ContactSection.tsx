import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { type FormEvent, type RefObject } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import SectionHeader from "@/components/SectionHeader";

// Opens the visitor's mail client with the form contents pre-filled
const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const name = String(data.get("name") ?? "");
  const email = String(data.get("email") ?? "");
  const subject = String(data.get("subject") ?? "문의");
  const message = String(data.get("message") ?? "");
  const body = `보낸 사람: ${name} (${email})\n\n${message}`;
  window.location.href = `mailto:minseokkim6823@gmail.com?subject=${encodeURIComponent(
    `[포트폴리오] ${subject}`
  )}&body=${encodeURIComponent(body)}`;
};

const ContactSection = ({ containerRef }: { containerRef: RefObject<HTMLDivElement> }) => {
  const { ref, opacity, y } = useSectionReveal(containerRef);
  return (
    <section ref={ref} id="contact" className="min-h-screen flex items-center py-14 sm:py-20 px-6">
      <motion.div style={{ opacity, y }} className="max-w-2xl mx-auto">
        <SectionHeader
          index="05"
          label="Contact"
          title="함께 일해요"
          description="프로젝트 문의나 협업 제안이 있으시면 편하게 연락해 주세요."
        />

        <motion.div
          className="flex flex-col sm:flex-row gap-6 mb-10 text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="mailto:minseokkim6823@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors group">
            <Mail className="w-4 h-4 text-accent group-hover:rotate-12 transition-transform" />
            minseokkim6823@gmail.com
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-accent" />
            송파구, 서울
          </span>
        </motion.div>

        <motion.form
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          onSubmit={handleSubmit}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Input name="name" required placeholder="이름" className="bg-card border-border h-11 rounded-lg focus:border-accent transition-colors" />
            <Input name="email" type="email" required placeholder="이메일" className="bg-card border-border h-11 rounded-lg focus:border-accent transition-colors" />
          </div>
          <Input name="subject" required placeholder="제목" className="bg-card border-border h-11 rounded-lg focus:border-accent transition-colors" />
          <Textarea
            name="message"
            required
            placeholder="메시지를 입력해 주세요..."
            rows={5}
            className="bg-card border-border rounded-lg resize-none focus:border-accent transition-colors"
          />
          <Button size="lg" className="w-full rounded-lg h-11 font-mono text-xs gap-2 group">
            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            보내기
          </Button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
