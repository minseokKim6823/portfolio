import { Github, Mail, ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";

const Footer = () => {
  return (
    <footer className="border-t border-border py-6 px-6">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © 2026 {profile.name}
        </p>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="이메일 보내기" className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="#about"
            aria-label="맨 위로"
            className="group flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-accent transition-colors border-l border-border pl-4"
          >
            Top
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
