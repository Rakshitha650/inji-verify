import React from 'react';
import { VerificationSuccessIcon, VerificationFailedIcon } from '../../../../utils/theme-utils';


const backgroundColorMapping: any = {
    EXPIRED: "bg-expired",
    INVALID: "bg-invalid",
    SUCCESS: "bg-success"
}

const textColorMapping: any = {
    SUCCESS: "text-success",
    INVALID: "text-invalid",
    EXPIRED: "text-expired"
}

const displayMessageMapping = {
    EXPIRED: "Unfortunately, the given credential is expired!",
    INVALID: "Unfortunately, the given credential is invalid!",
    SUCCESS: "Congratulations, the given credential is valid!"
}

const ResultSummary = ({status}: {
    status: "SUCCESS" | "EXPIRED" | "INVALID"
}) => {
    const backgroundColor = backgroundColorMapping[status]
    const textColor = textColorMapping[status]
    return (
        <div className="grid grid-cols-12 w-full">
            <div className={`col-start-1 col-end-13 h-[170px] lg:h-[186px] w-full ${backgroundColor}`}>
                <div className="grid grid-cols-12 justify-items-center items-center justify-center content-center pt-[30px]">
                    <div className={`col-start-1 col-end-13 block mb-2.5 ${textColor}`}>
                        {status === "SUCCESS" ? <VerificationSuccessIcon/> : <VerificationFailedIcon />}
                    </div>
                    <div className="col-start-1 col-end-13">
                        <p id="vc-result-display-message" className="font-normal text-lgNormalTextSize text-center">
                            {
                                displayMessageMapping[status]
                            }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResultSummary;
