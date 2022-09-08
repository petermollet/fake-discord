module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                discord: {
                    blue: '#404EED',
                    blurple: '#7289da',
                    purple: '#5865d2',
                    green: '#3ba55c',
                },
                zinc: {
                    750: '#2F3136',
                    775: '#292B2F',
                },
            },
        },
    },
    plugins: [require('tailwind-scrollbar-hide')],
};
