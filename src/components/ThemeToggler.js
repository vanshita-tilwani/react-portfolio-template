import * as React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import '../main.css'

const ThemeToggler = () => {
    const options = {
        'Neon Pink Theme': 'theme-menu-item-neon-pink',
        'Neon Purple Theme': 'theme-menu-item-neon-purple',
    };

    const handleDropdownSelect = (eventKey) => {
        switch (eventKey) {
            case 'theme-menu-item-neon-pink':
                document.documentElement.style.setProperty("--imp-icon-color", "#F535AA");
                break;
            case 'theme-menu-item-neon-purple':
                document.documentElement.style.setProperty("--imp-icon-color", "#c770f0");
                break;
            default:
                document.documentElement.style.setProperty("--imp-icon-color", "#c770f0");
        }
    };

    return (
        <Dropdown className="theme-menu" onSelect={handleDropdownSelect}>
            <Dropdown.Toggle className="theme-menu">Theme Toggler</Dropdown.Toggle>
            <Dropdown.Menu className="theme-menu">{
                Object.keys(options).map((option) => (
                    <Dropdown.Item key={option} eventKey={options[option]} className={options[option]} >{option}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default ThemeToggler;
