export const toggleDarkMode = (): void => {
    try {
        const html: HTMLHtmlElement | null = document.querySelector('html');
        html?.classList.toggle('dark');
    } catch (error) {
        console.error(error);
    }
}

export const toggleNavbar = () => {

    try {

        const navbarId = document.getElementById('navbar-default');
        navbarId?.classList.toggle('hidden');

    } catch (error) {
        console.log(error);
    }

}