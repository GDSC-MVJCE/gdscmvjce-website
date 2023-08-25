export const lightTheme = {
  type: "light",
  colors: {
    brandRed: "#EA4335",
    brandYellow: "#FBBC04",
    brandGreen: "#0F9D58",
    brandBlue: "#4285F4",
    bgPrimary: "#FFFFFF",
    bgSecondary: "#E9E9E9",
    bgTertiary: "#e9e9e9",
    contentPrimary: "#131313",
    contentSecondary: "#6e6e6e"
  }
};

export const darkTheme = {
  type: "dark",
  colors: {
    brandRed: "#EA4335",
    brandYellow: "#FBBC04",
    brandGreen: "#0F9D58",
    brandBlue: "#4285F4",
    bgPrimary: "#131313",
    bgSecondary: "#292929",
    bgTertiary: "#e9e9e9",
    contentPrimary: "#FFFFFF",
    contentSecondary: "#858585"
  }
};

export const typography = {
  h1: {
    fontWeight: "700",
    fontSize: "40px",
    lineHeight: "55px",
    letterSpacing: "0.4px"
  },
  h2: {
    fontWeight: "600",
    fontSize: "32px",
    lineHeight: "44px",
    letterSpacing: "0.4px"
  },
  h3: {
    fontWeight: "600",
    fontSize: "28px",
    lineHeight: "38px",
    letterSpacing: "0.4px"
  },
  h4: {
    fontWeight: "500",
    fontSize: "24px",
    lineHeight: "33px",
    letterSpacing: "0.2px"
  },
  h5: {
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "27px"
  },
  body: {
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "24px",
    letterSpacing: "0.4px"
  },
  bodyEmphasized: {
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "25px",
    letterSpacing: "0.4px"
  },
  bodySmall: {
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "19px",
    letterSpacing: "0.4px"
  },
  bodySmallEmphasized: {
    fontSize: "16px",
    fontWeight: "600",
    letterSpacing: "0.4px"
  },
  caption: {
    fontWeight: "400",
    fontSize: "10px",
    lineHeight: "14px",
    letterSpacing: "0.4px"
  },
  displayLarge: {
    fontWeight: "700",
    fontSize: "56px"
  }
};

export const mobileTypography = {
  h1: {
    fontWeight: "700",
    fontSize: "28px",
    lineHeight: "38px",
    letterSpacing: "0.4px"
  },
  h2: {
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "33px",
    letterSpacing: "0.4px"
  },
  h3: {
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "27px",
    letterSpacing: "0.4px"
  },
  h4: {
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "25px",
    letterSpacing: "0.4px"
  },
  h5: {
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "22px",
    letterSpacing: "0.4px"
  },
  h5: {
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "19px",
    letterSpacing: "0.4px"
  },
  body: {
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "19px",
    letterSpacing: "0.4px"
  },
  bodyEmphasized: {
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "22px",
    letterSpacing: "0.4px"
  },
  bodySmall: {
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "16px",
    letterSpacing: "0.4px"
  },
  bodySmallEmphasized: {
    fontSize: "14px",
    fontWeight: "600",
    letterSpacing: "0.4px"
  },
  caption: {
    fontWeight: "400",
    fontSize: "8px",
    lineHeight: "12px",
    letterSpacing: "0.4px"
  },
  displayLarge: {
    fontWeight: "700",
    fontSize: "30px",
    letterSpacing: "0.4px"
  }
};

export const breakpoints = {
  xs: "320px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px"
};

export const devices = {
  xs: `(max-width: ${breakpoints.xs})`,
  sm: `(max-width: ${breakpoints.sm})`,
  md: `(max-width: ${breakpoints.md})`,
  lg: `(max-width: ${breakpoints.lg})`,
  xl: `(max-width: ${breakpoints.xl})`,
  "2xl": `(max-width: ${breakpoints["2xl"]})`
};
