"use client";
import { useEffect, useState } from "react";

export default function CvPrintPage() {
  const [md, setMd] = useState("");

  useEffect(() => {
    fetch("/CV.md")
      .then(res => res.text())
      .then(setMd);
  }, []);

  useEffect(() => {
    if (md) {
      setTimeout(() => window.print(), 600);
    }
  }, [md]);

  return (
    <div className="cv-print-page" style={{ maxWidth: 900, margin: "0 auto", padding: 24, fontFamily: 'serif', background: 'white' }}>
      <style>{`
        @media print {
          body, html { background: white !important; }
          .cv-print-page { box-shadow: none !important; }
        }
        h1, h2, h3 { color: #312e81; margin-top: 1.5em; }
        hr, .hr { margin: 2em 0; }
      `}</style>
      {md ? (
        <div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: markdownToHtml(md) }} />
      ) : (
        <div>Loading CV...</div>
      )}
    </div>
  );
}

// Basic markdown to HTML converter (only major blocks for now)
function markdownToHtml(md) {
  return md
    .replace(/^#\s?(.+)$/gm, '<h1>$1</h1>')
    .replace(/^##\s?(.+)$/gm, '<h2>$1</h2>')
    .replace(/^\*\*(.+)\*\*$/gm, '<h3>$1</h3>')
    .replace(/^---+$/gm, '<hr>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/\n<li>/g, '<ul><li>').replace(/<\/li>(?!<li>)/g, '</li></ul>')
    .replace(/\n/g, '<br>');
}
