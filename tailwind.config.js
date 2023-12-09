/** @type {import('tailwindcss').Config} */
export const content = ["./*.{html,js}"];
export const theme = {
    extend: {
        backgroundImage: {
            'header': "url('./assets/img/banniere.jpg')",
        }
    },
    container: {
        center: true,
    }
};
export const plugins = [];