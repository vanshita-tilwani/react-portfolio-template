import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { HamburgerMenuIcon, DotFilledIcon, } from '@radix-ui/react-icons';

function ThemeToggler() {
    const [theme, setTheme] = React.useState('neon-dark-violet');
    const handleDropdownSelect = (eventKey) => {
        setTheme(eventKey)
        switch (eventKey) {
            case 'neon-dark-pink':
                document.documentElement.style.setProperty("--imp-icon-color", "#F535AA");
                break;
            case 'neon-dark-violet':
                document.documentElement.style.setProperty("--imp-icon-color", "#c770f0");
                break;
            default:
                document.documentElement.style.setProperty("--imp-icon-color", "#c770f0");
        }
    };
    return (
        <DropdownMenu.Root onSelect={handleDropdownSelect}>
            <DropdownMenu.Trigger asChild >
                <button className="NavigationMenuTrigger" aria-label="Customise options">
                    <HamburgerMenuIcon />
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content className="NavigationMenuViewport" sideOffset={5}>
                    <DropdownMenu.RadioGroup value={theme} onValueChange={handleDropdownSelect}>
                        <DropdownMenu.RadioItem className="DropdownMenuRadioItem" value="neon-dark-pink">
                            <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                                <DotFilledIcon />
                            </DropdownMenu.ItemIndicator>
                            Dark Neon Pink
                        </DropdownMenu.RadioItem>
                        <DropdownMenu.RadioItem className="DropdownMenuRadioItem" value="neon-dark-violet">
                            <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                                <DotFilledIcon />
                            </DropdownMenu.ItemIndicator>
                            Dark Neon Violet
                        </DropdownMenu.RadioItem>
                    </DropdownMenu.RadioGroup>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

export default ThemeToggler;
