import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon, BackpackIcon } from '@radix-ui/react-icons';
import portfolio_logo from "../../assets/logo.png";
import '../../main.css'

function Header() {
  return (
    <div className='side-by-side-components'>
      <a className='side-by-side-components p-3' href='/' >
        <BackpackIcon href='/' width={30} height={30} className='icon-color'></BackpackIcon>
        <img href='/' src={portfolio_logo} alt='' height={30} width={200}></img>
      </a>
      <NavigationMenu.Root className="NavigationMenuRoot">
        <NavigationMenu.List className="NavigationMenuList p-3">
          <NavigationMenu.Item>
            <NavigationMenu.Link className="NavigationMenuLink" href="/">
              Home
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="NavigationMenuTrigger">
              About <CaretDownIcon className="CaretDown" aria-hidden />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="NavigationMenuContent">
              <ul className="List one">
                <li style={{ gridRow: 'span 3' }}>
                  <NavigationMenu.Link asChild>
                    <a className="Callout" href="/about">
                      <svg aria-hidden width="38" height="38" viewBox="0 0 25 25" fill="white">
                        <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                        <path d="M12 0H4V8H12V0Z"></path>
                        <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                      </svg>
                      <div className="CalloutHeading">Radix Primitives</div>
                      <p className="CalloutText">Unstyled, accessible components for React.</p>
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

          {/*<NavigationMenu.Item>
            <NavigationMenu.Trigger className="NavigationMenuTrigger">
              Overview <CaretDownIcon className="CaretDown" aria-hidden />
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
  </NavigationMenu.Item>*/}

          <NavigationMenu.Item>
            <NavigationMenu.Link className="NavigationMenuLink" href="/">
              Work Experience
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Link className="NavigationMenuLink" href="/">
              Projects
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Link className="NavigationMenuLink" href="/ß">
              Resume
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