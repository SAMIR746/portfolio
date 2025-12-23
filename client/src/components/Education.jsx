// Education
export default function Education({ education }) { return ( <section className="container mt-5"> <h2>Education</h2> {education.map((e, i) => ( <div key={i} className="card p-3 mb-3"> <h5>{e.degree}</h5> <p>{e.institute}</p> <strong>{e.result}</strong> <ul> {e.certificates.map((c, idx) => <li key={idx}>{c}</li>)} </ul> </div> ))} </section> ); }
