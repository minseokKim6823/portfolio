import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4">Contact</p>
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">함께 일해요</h2>
          <p className="text-muted-foreground text-lg">
            프로젝트 문의나 협업 제안이 있으시면 편하게 연락해 주세요.
          </p>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-8 mb-12 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <a href="mailto:minseokkim6823@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="w-4 h-4 text-primary" />
            minseokkim6823@gmail.com
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            송파구, 서울
          </span>
        </motion.div>

        <motion.form
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <Input
              placeholder="이름"
              className="bg-card/50 border-border/50 h-12 rounded-xl focus:border-primary"
            />
            <Input
              type="email"
              placeholder="이메일"
              className="bg-card/50 border-border/50 h-12 rounded-xl focus:border-primary"
            />
          </div>
          <Input
            placeholder="제목"
            className="bg-card/50 border-border/50 h-12 rounded-xl focus:border-primary"
          />
          <Textarea
            placeholder="메시지를 입력해 주세요..."
            rows={6}
            className="bg-card/50 border-border/50 rounded-xl focus:border-primary resize-none"
          />
          <Button size="lg" className="w-full rounded-xl h-12 font-mono text-sm gap-2">
            <Send className="w-4 h-4" />
            보내기
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
