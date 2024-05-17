import React from 'react';
import classNames from 'classnames';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon, BackpackIcon, HomeIcon, PersonIcon, LaptopIcon, CodeIcon, FileTextIcon, IdCardIcon } from '@radix-ui/react-icons';
import portfolio_logo from "../../assets/logo.png";
import about_logo from "../../assets/about_header.png"
import '../../main.css'

function Header() {
  return (
    <div className='side-by-side-components'>
      <a className='side-by-side-components p-3' href='/' >
        <BackpackIcon href='/' width={30} height={30} className='icon-color' />
        <img href='/' src={portfolio_logo} alt='' height={30} width={200} />
      </a>
      <NavigationMenu.Root className="NavigationMenuRoot">
        <NavigationMenu.List className="NavigationMenuList p-3">
          <NavigationMenu.Item>
            <NavigationMenu.Link className="NavigationMenuLink" href="/">
              <div>
                <HomeIcon className='me-1' />Home
              </div>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="NavigationMenuTrigger">
              <PersonIcon />About <CaretDownIcon className="CaretDown" aria-hidden />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="NavigationMenuContent">
              <ul className="List one">
                <li style={{ gridRow: 'span 3' }}>
                  <NavigationMenu.Link asChild>
                    <a className="Callout" href="/about">
                      <img src={about_logo}
                        width={100}
                        height={100}
                        alt='' />
                      <div className="CalloutHeading">Get to know me</div>
                      <p className="CalloutText">I'd love for you to discover more about me</p>
                    </a>
                  </NavigationMenu.Link>
                </li>
                <ListItem href="/about/#bio-section" title="About Me">
                  The Chronicles of a Human in Beta Version (glitches included)
                </ListItem>
                <ListItem href="/about/#skills-section" title="Skills">
                  My Bag of Tricks (no rabbits included... unless you're into that)
                </ListItem>
                <ListItem href="/about/#contact-section" title="Hit me Up">
                  Let's Chat (preferably not carrier pigeon)
                </ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link className="NavigationMenuLink" href="/education">
              <IdCardIcon className='mb-1 me-1' />Education
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link className="NavigationMenuLink" href="/experience">
              <LaptopIcon className='mb-1 me-1' />Work Experience
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="NavigationMenuTrigger">
              <CodeIcon />Projects <CaretDownIcon className="CaretDown" aria-hidden />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="NavigationMenuContent">
              <ul className="List two">
                <ListItem title="Introduction" href="/primitives/docs/overview/introduction">
                  Build high-quality, accessible design systems and web apps.
                </ListItem>
                <ListItem title="Getting started" href="/primitives/docs/overview/getting-started">
                  A quick tutorial to get you up and running with Radix Primitives.
                </ListItem>
                <ListItem title="Styling" href="/primitives/docs/guides/styling">
                  Unstyled and compatible with any styling solution.
                </ListItem>
                <ListItem title="Animation" href="/primitives/docs/guides/animation">
                  Use CSS keyframes or any animation library of your choice.
                </ListItem>
                <ListItem title="Accessibility" href="/primitives/docs/overview/accessibility">
                  Tested in a range of browsers and assistive technologies.
                </ListItem>
                <ListItem title="Releases" href="/primitives/docs/overview/releases">
                  Radix Primitives releases and their changelogs.
                </ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link className="NavigationMenuLink" href="/ß">
              <FileTextIcon className='me-1' />Resume
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Indicator className="NavigationMenuIndicator">
            <div className="Arrow" />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>
        <div className="ViewportPosition">
          <NavigationMenu.Viewport className="NavigationMenuViewport" />
        </div>
      </NavigationMenu.Root>
    </div>
  );
}

const ListItem = React.forwardRef(({ className, children, title, ...props }, forwardedRef) => (
  <li key={title}>
    <NavigationMenu.Link asChild>
      <a className={classNames('ListItemLink', className)} {...props} ref={forwardedRef}>
        <div className="ListItemHeading">{title}</div>
        <p className="ListItemText">{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
));

export default Header