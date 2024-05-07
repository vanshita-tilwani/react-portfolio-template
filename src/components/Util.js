const openEmail = () => {
    const recipientEmail = 'msvtilwani@gmail.com';
    const subject = 'Subject of the email';
    const body = 'Body of the email';
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
}

export { openEmail }