import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import Layout from '../components/layout'

const About = ({ users }) => (
  <Layout> 
    <div>
      this is about page
    </div>
    </Layout>
)
    
    About.getInitialProps = async () => {
      const response = await fetch('http://localhost:3000/api/users')
      const users = await response.json()
    
      return { users }
    }
    
    export default About
    