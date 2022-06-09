module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        button: "var(--color-bg-button)",
      },
      textColor: {
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        accent: "var(--color-text-accent)",
        alert: "var(--color-text-alert)",
        btnText: "var(--color-link-active)",
        btnTextHover: "var(--color-link-hover)",
      },
      fontFamily: {
        custom: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
