/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        base: "var(--iv-font-base)",
      },
      fontSize: {
        lgBoldTextSize: "26px",
        boldTextSize: "19px",
        lgMediumTextSize: "24px",
        mediumTextSize: "20px",
        lgNormalTextSize: "16px",
        normalTextSize: "14px",
        smallTextSize: "12px",
        verySmallTextSize: "11px",
      },
      colors: {
        primary: "var(--iv-primary-color)",
        logoStart: "var(--iv-logo-start-color)",
        background: "var(--iv-background-color)",
        whiteText: "var(--iv-white-text)",
        headerLabelText: "var(--iv-header-label-text)",
        headerDescriptionText: "var(--iv-header-description-text)",
        offlineLabel: "var(--iv-offline-label-text)",
        offlineDescription: "var(--iv-offline-description-text)",
        tabsBackGround: "var(--iv-verificationMethodTabs-bg-color)",
        horizontalLine: "var(--iv-horizontal-line)",
        headerBackGround: "var(--iv-header-background-color)",
        pageBackGroundColor: "var(--iv-page-background-color)",
        success: "var(--iv-success)",
        invalid: "var(--iv-invalid)",
        expired: "var(--iv-expired)",
        successAlert: "var(--iv-success-alert)",
        warningAlert: "var(--iv-warning-alert)",
        errorAlert: "var(--iv-error-alert)",
        arrowBackGround: "var(--iv-arrow-background)",
        stepperBackGround: "var(--iv-stepper-background)",
        stepperLabel: "var(--iv-stepper-label)",
        stepperDescription: "var(--iv-stepper-description)",
        cameraDeniedLabel: "var(--iv-camera-denied-label-color)",
        cameraDeniedDescription: "var(--iv-camera-denied-description-color)",
        uploadDescription: "var(--iv-upload-description)",
        copyRightsText: "var(--iv-copyrights-text)",
        copyRightsBorder: "var(--iv-copyrights-border)",
        activeTabText: "var(--iv-active-tab-text)",
        activeTabBackground: "var(--iv-active-tab-background)",
        inactiveTabText: "var(--iv-inactive-tab-text)",
        inactiveTabBackground: "var(--iv-inactive-tab-background)",
        disableTabBackground: "var(--iv-disabledTab-bg)",
        disableTabText: "var(--iv-disabledTab-text)",
        documentIcon: "var(--iv-document-icon)",
      },
      backgroundImage: {
        "gradient": "linear-gradient(90deg, #52AE32 0%, #006535 100%)",
        "gradient-sm": "linear-gradient(90deg, #52AE32 0%, #006535 100%)",
        "lighter-gradient":
          "linear-gradient(83.99deg, rgba(211, 246, 199, 0.08) 38.27%, rgba(82, 174, 50, 0.08) 93.3%)",
      },
    },
  },
  plugins: [],
};
