import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { BsCCircle } from "react-icons/bs";
import { HeartFilledIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import '../../main.css'

function Footer() {
  return (
    <NavigationMenu.Root className="side-by-side-components">
      <NavigationMenu.Item className='NavigationMenuList'>
        <div className='font-css'>Copyright <BsCCircle className='icon-color' /> Vanshita Tilwani</div>
      </NavigationMenu.Item>
      <NavigationMenu.Item className='NavigationMenuList'>
        <div className='font-css'>Made with love<HeartFilledIcon className='icon-color mb-1' /></div>
      </NavigationMenu.Item>
      <NavigationMenu.Item className='NavigationMenuList'>
        <NavigationMenu.Link href='https://github.com/vanshita-tilwani'><GitHubLogoIcon width={20} height={20} className="me-4 icon-color" /></NavigationMenu.Link>
        <NavigationMenu.Link href='https://www.linkedin.com/in/vanshita-tilwani/'><LinkedInLogoIcon width={20} height={20} className='me-4 icon-color' /></NavigationMenu.Link>
      </NavigationMenu.Item>
    </NavigationMenu.Root>
  );
}

export default Footer