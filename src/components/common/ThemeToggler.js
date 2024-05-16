import React from 'react';
import * as Switch from '@radix-ui/react-switch';
import { ColorWheelIcon } from '@radix-ui/react-icons';

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

        <div>

            <label className="text-white" htmlFor="airplane-mode">
                <ColorWheelIcon className='me-1 mb-1' /> Theme
            </label>
            <Switch.Root className="SwitchRoot ms-4" id="airplane-mode">
                <Switch.Thumb className="SwitchThumb" />
            </Switch.Root>
        </div>

    );
};

export default ThemeToggler;
