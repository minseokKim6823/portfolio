import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6 snap-start">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-accent text-xs tracking-[0.3em] uppercase mb-4">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">함께 일해요</h2>
          <p className="text-muted-foreground">
            프로젝트 문의나 협업 제안이 있으시면 편하게 연락해 주세요.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 mb-10 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <a href="mailto:minseokkim6823@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
            <Mail className="w-4 h-4 text-accent" />
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
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Input placeholder="이름" className="bg-card border-border h-11 rounded-lg" />
            <Input type="email" placeholder="이메일" className="bg-card border-border h-11 rounded-lg" />
          </div>
          <Input placeholder="제목" className="bg-card border-border h-11 rounded-lg" />
          <Textarea
            placeholder="메시지를 입력해 주세요..."
            rows={5}
            className="bg-card border-border rounded-lg resize-none"
          />
          <Button size="lg" className="w-full rounded-lg h-11 font-mono text-xs gap-2">
            <Send className="w-4 h-4" />
            보내기
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
