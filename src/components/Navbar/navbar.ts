export const toggleDarkMode = () => {
    try {
        const html = document.querySelector('html');
        html?.classList.toggle('dark');
    } catch (error) {
        console.error(error);
    }
}