import {Footer} from 'flowbite-react'; 
import { Link } from 'react-router-dom';
import {BsLinkedin} from 'react-icons/bs';
export default function FooterCom() {
  return <Footer container className='border border-t-8 border-teal-500'>
    <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-col-1'>
           <div className='mt-5 '>
           <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-red-500 to-yellow-400 rounded-lg text-white'>Mathi's</span>
            Blog
            </Link>
           </div>
           <div className='grid grid-cols-2 gap-8mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
            <Footer.Title title='About' />
            <Footer.LinkGroup col>
                <Footer.Link 
                    href='https://www.linkedin.com/in/mathialahan-u-9317a8213/'
                    target ='_blank'
                    rel='noopener noreferrer'>
                    Linkden
                </Footer.Link>
            </Footer.LinkGroup>
            <Footer.LinkGroup col>
                <Footer.Link 
                    href='https://github.com/mathi2001?tab=repositories'
                    target ='_blank'
                    rel='noopener noreferrer'>
                    Git
                </Footer.Link>
            </Footer.LinkGroup>
            <Footer.LinkGroup col>
            <Footer.Title title='Legal' />
                <Footer.Link 
                    href='#'>
                    Privacy policy
                </Footer.Link>
            </Footer.LinkGroup>
            <Footer.LinkGroup col>
                <Footer.Link 
                    href='#'>
                    Terms & Conditions
                </Footer.Link>
            </Footer.LinkGroup>
            </div>
           </div>
        </div>
        <Footer.Divider/>
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
            <Footer.Copyright href='#' by="Mathi's Blog" year={new Date().getFullYear()}/>
            <div className='flex gap-5 sm:mt-0 mt-4 sm:justify-center'>
                {/*add icons here*/}
                <Footer.Icon href='#' icon={BsLinkedin}/>
            </div>
        </div>
    </div>
  </Footer>
}
