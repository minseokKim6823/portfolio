import { Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © 2026 김민석
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/minseokKim6823" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href="mailto:minseokkim6823@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
