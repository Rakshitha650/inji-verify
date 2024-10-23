import {AlertInfo} from "../types/data-types";
import i18next from 'i18next';

export const Pages = {
    Home: "/",
    VerifyCredentials: "/",/*"/verify"*/
    Offline: "/offline",
    Redirect: "/redirect",
    PageNotFound: "*"
}

export const SUPPORTED_DID_METHODS = ["web"];

export const SUPPORTED_QR_HEADERS = [''];
export const HEADER_DELIMITER = '';

export const SupportedFileTypes = ["png", "jpeg", "jpg", "pdf"];

export const VerificationSteps: any = {
    "SCAN": {
        QrCodePrompt: 1,
        ActivateCamera: 2,
        Verifying: 3,
        DisplayResult: 4
    },
    "UPLOAD": {
        QrCodePrompt: 1,
        Verifying: 2,
        DisplayResult: 3
    }
}

export const VerificationStepsContent: any = {
    SCAN: [
        {
            label: i18next.t('VerificationStepsContent:SCAN.QrCodePrompt.label'),
            description: i18next.t('VerificationStepsContent:SCAN.QrCodePrompt.description'),
        },
        {
            label: i18next.t('VerificationStepsContent:SCAN.ActivateCamera.label'),
            description: i18next.t('VerificationStepsContent:SCAN.ActivateCamera.description'),
        },
        {
            label: i18next.t('VerificationStepsContent:SCAN.Verifying.label'),
            description: i18next.t('VerificationStepsContent:SCAN.Verifying.description'),
        },
        {
            label: i18next.t('VerificationStepsContent:SCAN.DisplayResult.label'),
            description: i18next.t('VerificationStepsContent:SCAN.DisplayResult.description'),
        }
    ],
    UPLOAD: [
        {
            label: i18next.t('VerificationStepsContent:UPLOAD.QrCodePrompt.label'),
            description: i18next.t('VerificationStepsContent:UPLOAD.QrCodePrompt.description'),
        },
        {
            label: i18next.t('VerificationStepsContent:UPLOAD.Verifying.label'),
            description: i18next.t('VerificationStepsContent:UPLOAD.Verifying.description'),
        },
        {
            label: i18next.t('VerificationStepsContent:UPLOAD.DisplayResult.label'),
            description: i18next.t('VerificationStepsContent:UPLOAD.DisplayResult.description'),
        }
    ]
};


export const AlertMessages = {
    qrUploadSuccess: {message: i18next.t("AlertMessages:qrUploadSuccess"), severity: "success", autoHideDuration: 1200} as AlertInfo,
    sessionExpired: {message: i18next.t("AlertMessages:sessionExpired"), severity: "error"} as AlertInfo,
    qrNotDetected: {message: i18next.t("AlertMessages:qrNotDetected"), severity: "error"} as AlertInfo,
    qrNotSupported: {message: i18next.t("AlertMessages:qrNotSupported"), severity: "error"} as AlertInfo,
    unsupportedFileSize: {message: i18next.t("AlertMessages:unsupportedFileSize"), severity: "error"} as AlertInfo,
    verificationMethodComingSoon: {message: i18next.t("AlertMessages:verificationMethodComingSoon"), severity: "warning"} as AlertInfo,
    unsupportedFileType: {message: i18next.t("AlertMessages:unsupportedFileType"), severity: "error"} as AlertInfo,
    pageNotFound: {message: i18next.t("AlertMessages:pageNotFound"), severity: "error"} as AlertInfo
};

// TODO: Update the error messages for the following
// maintain mapping between the error codes and
export const OvpErrors: any = {
  invalid_scope: i18next.t("OvpErrors:invalidScope"), //presently this won't be shown, as no scope is being passed
  invalid_request: i18next.t("OvpErrors:invalidRequest"),
  invalid_client: i18next.t("OvpErrors:invalidClient"), //handled in inji web, no redirection
  vp_formats_not_supported: i18next.t("OvpErrors:vpFormatsNotSupported"), // presently not handled specifically, bad request (invalid_request error is responded)
  invalid_presentation_definition_uri: i18next.t("OvpErrors:invalidPresentationDefinitionUri"), // not being used, presentation definition being used
  invalid_presentation_definition_reference: i18next.t("OvpErrors:invalidPresentationDefinitionReference"), // not being used, presentation definition being used.
  resource_not_found: i18next.t("OvpErrors:resourceNotFound"),
  request_time_out: i18next.t("OvpErrors:requestTimeOut"),
  uri_too_long: i18next.t("OvpErrors:uriTooLong"),
  internal_server_error: i18next.t("OvpErrors:internalServerError"),
  server_unavailable: i18next.t("OvpErrors:serverUnavailable"),
  invalid_vp_token: i18next.t("OvpErrors:invalidVpToken"),
  unsupported_format: i18next.t("OvpErrors:unsupportedFormat")
};

export const ScanSessionExpiryTime = 60000; // in milliseconds

export const UploadFileSizeLimits = {
    min: 10000, // 10KB
    max: 5000000 // 5MB
}

export const InternetConnectivityCheckEndpoint = window._env_.INTERNET_CONNECTIVITY_CHECK_ENDPOINT ?? "https://dns.google/";

export const InternetConnectivityCheckTimeout = isNaN(Number.parseInt(window._env_.INTERNET_CONNECTIVITY_CHECK_TIMEOUT))
    ? 10000
    : Number.parseInt(window._env_.INTERNET_CONNECTIVITY_CHECK_TIMEOUT); //milliseconds

export const OvpQrHeader = window._env_.OVP_QR_HEADER;

export const ZOOM_STEP = 2.5;
export const INITIAL_ZOOM_LEVEL = 0;
export const CONSTRAINTS_IDEAL_WIDTH = 2560;
export const CONSTRAINTS_IDEAL_HEIGHT = 1440;
export const CONSTRAINTS_IDEAL_FRAME_RATE = 30;
export const FRAME_PROCESS_INTERVAL_MS = 100;
export const THROTTLE_FRAMES_PER_SEC = 500; // Throttle frame processing to every 500ms (~2 frames per second)
