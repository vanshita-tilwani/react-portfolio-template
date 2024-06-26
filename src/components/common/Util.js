const openEmail = () => {
    const recipientEmail = 'msvtilwani@gmail.com';
    const subject = 'Subject of the email';
    const body = 'Body of the email';
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
}

const routeAnimation = {
    initial: {
        x: "100vw",
    },
    final: {
        x: "0vw",
        transition: {
            type: "spring",
            mass: 0.4,
        },
    },
};

export { openEmail, routeAnimation }