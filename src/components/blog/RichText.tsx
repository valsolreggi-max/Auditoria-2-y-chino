import React from 'react';

/**
 * Convierte el texto de los artículos en elementos React.
 * Admite **negrita**, *cursiva* y [texto](https://enlace). No interpreta HTML.
 */
const TOKEN = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)|\*([^*]+)\*/g;

export const RichText: React.FC<{ text: string }> = ({ text }) => <>{parse(text, 'r')}</>;

function parse(text: string, keyPrefix: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let i = 0;
  TOKEN.lastIndex = 0;
  const matches = Array.from(text.matchAll(TOKEN));

  for (const m of matches) {
    const start = m.index ?? 0;
    if (start > last) nodes.push(text.slice(last, start));
    const key = `${keyPrefix}-${i++}`;

    if (m[1] !== undefined) {
      nodes.push(
        <strong key={key} className="font-semibold text-[#24211D]">
          {parse(m[1], key)}
        </strong>
      );
    } else if (m[2] !== undefined && m[3] !== undefined) {
      const isExternal = /^https?:\/\//.test(m[3]);
      nodes.push(
        <a
          key={key}
          href={m[3]}
          className="text-[#6F8A5A] underline underline-offset-2 decoration-[#D4AF37]/60 hover:text-[#24211D] transition-colors"
          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {m[2]}
        </a>
      );
    } else if (m[4] !== undefined) {
      nodes.push(<em key={key}>{m[4]}</em>);
    }
    last = start + m[0].length;
  }

  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}
