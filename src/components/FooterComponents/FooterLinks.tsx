
export interface FooterLinksProps {
    title: string
    p?: string
    p2?: string
    p3?: string
    p4?: string
    p5?: string
    p6?: string
    p7?: string
}


export default function FooterLinks({title, p2, p3, p4, p, p5, p6, p7}: FooterLinksProps) {
  return (
    <div className="w-full md:w-1/4 space-y-2">
      <h1 className="font-bold uppercase">{title}</h1>
      <p>{p}</p>
      <p>{p2}</p>
      <p>{p3}</p>
      <p>{p4}</p>
      <p>{p5}</p>
    </div>
  );
}
