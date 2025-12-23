// Hero
export default function Hero({ profile }) { return ( <section className="hero"> <img src={profile.image} alt="Profile" /> <h1>{profile.name}</h1> <h4>{profile.title}</h4> </section> ); }
