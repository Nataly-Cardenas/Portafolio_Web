import { PROJECTS } from '@/lib/data';
export default function MiniUI({id}:{id:string}) {
 const project=PROJECTS.find(p=>p.id===id)!;
 return <div style={{height:'100%',padding:24,borderRadius:18,background:'var(--paper)',boxShadow:'var(--hair)',display:'flex',flexDirection:'column',gap:20}} aria-hidden="true">
  <div style={{font:'11px var(--font-mono)',borderBottom:'1px solid var(--line)',paddingBottom:14,display:'flex',justifyContent:'space-between'}}><span>● ● ●</span><span>SINGULARITY</span></div>
  <div style={{font:'italic 42px var(--font-serif)',color:'var(--ink)'}}>{project.index} /</div>
  <div style={{fontWeight:600,fontSize:23,letterSpacing:'-.04em'}}>{project.title}</div>
  {project.features.map((feature,i)=><div key={feature} style={{padding:'12px 14px',borderRadius:12,background:i===0?'var(--lagoon)':'var(--card)',boxShadow:'var(--hair)',fontSize:12,display:'flex',gap:14}}><span style={{opacity:.6}}>0{i+1}</span>{feature}</div>)}
 </div>;
}
