

import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";


const Footer = () => {
  return (
    <footer>
      <h4>Developed by Kavyashree</h4>
      <h4>Copyright &copy; 2025 KS</h4>
      <div className='footerLinks'>
        <a href="https://github.com/kavya64102" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/kavyashreesl/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:kavyashreesl247@gmail.com@gmail.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer