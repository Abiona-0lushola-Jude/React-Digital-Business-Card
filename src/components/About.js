import envelope from '../images/envelope-solid.svg'
import linkedIn from "../images/linkedin-in-brands.svg"

const About = () => {
  return (
    <div className='about'>
        <section className='head'>
            <h1>Abiona Olushola</h1>
            <p>Full Stack Developer</p>
            <p className='myLink'><a href='Abiona-0lushola-Jude.github.io' target={'_blank'}>Olushola Website</a></p>
            <div className='btn-links'>
                <div className='btn'>
                    <img src={envelope}  alt='email button' style={{width:16+ "px"}} />
                    <p><a href='abionaolushola11@yahoo.com'>Email</a></p>
                </div>
                <div className='btn'>
                    <img src={linkedIn}  alt='linkedIn button' style={{width:16+ "px"}}/>
                    <p><a href='https://www.linkedin.com/in/abiona-olushola/'>linkedIn </a></p>
                </div>
            </div>
        </section>
        <section className='about-info'>
            <h1>About</h1>
            <p>I am a full stack developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        </section>
        <section className='interest'>
            <h1>Interests</h1>
            <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </section>
      
    </div>
  )
}

export default About
