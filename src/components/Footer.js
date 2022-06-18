import facebook from '../images/facebook-f-brands.svg'
import twiiter from '../images/twitter-brands.svg'
import instagram from '../images/instagram-brands.svg'
import github from '../images/github-brands.svg'


const Footer = () => {
  return (
    <div>
      <section className='footer'>
        <a href='https://twitter.com/abiona_jude'><img src={twiiter} alt='twitter' style={{width:20+ "px"}} /></a>
        <a href='https://web.facebook.com/abiona.olushola.1'><img src={facebook} alt='facebook' style={{width:15+ "px"}}/></a>
        <a href='https://www.instagram.com/abionaolushola/'><img src={instagram} alt='instagram' style={{width:20+ "px"}} /></a>
        <a href='https://github.com/Abiona-0lushola-Jude'><img src={github} alt='github' style={{width:20+ "px"}} /></a>
      </section>
    </div>
  )
}

export default Footer
