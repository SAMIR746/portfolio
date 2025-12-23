// Projects
export default function Projects({ projects }) { return ( <section className="container mt-5"> <h2>Projects</h2> <div className="row"> {projects.map(p => ( <div key={p.id} className="col-md-4"> <div className="card project-card p-3"> <h5>{p.title}</h5> <p>{p.desc}</p> </div> </div> ))} </div> </section> ); }
