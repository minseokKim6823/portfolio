import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const lineReveal = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6 snap-start">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <div className="overflow-hidden">
            <motion.p
              className="font-mono text-accent text-xs tracking-[0.3em] uppercase mb-4"
              variants={lineReveal} initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.5 }} custom={0}
            >
              Contact
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              variants={lineReveal} initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.5 }} custom={1}
            >
              함께 일해요
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.p
              className="text-muted-foreground"
              variants={lineReveal} initial="hidden" whileInView="visible"
              viewport={{ once: true, amount: 0.5 }} custom={2}
            >
              프로젝트 문의나 협업 제안이 있으시면 편하게 연락해 주세요.
            </motion.p>
          </div>
        </div>

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
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Input placeholder="이름" className="bg-card border-border h-11 rounded-lg focus:border-accent transition-colors" />
            <Input type="email" placeholder="이메일" className="bg-card border-border h-11 rounded-lg focus:border-accent transition-colors" />
          </div>
          <Input placeholder="제목" className="bg-card border-border h-11 rounded-lg focus:border-accent transition-colors" />
          <Textarea
            placeholder="메시지를 입력해 주세요..."
            rows={5}
            className="bg-card border-border rounded-lg resize-none focus:border-accent transition-colors"
          />
          <Button size="lg" className="w-full rounded-lg h-11 font-mono text-xs gap-2 group">
            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            보내기
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
