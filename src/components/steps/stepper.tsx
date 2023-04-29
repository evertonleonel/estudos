import { CheckIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";

export const useStepper = () => {
  const steps = ["Email", "Password", "Token"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const returnStep = () => {
    setCurrentStep((prev) => {
      if (prev === 1) {
        return prev;
      } else {
        setComplete(false);
        return prev - 1;
      }
    });
  };

  const nextStep = () => {
    if (currentStep === steps.length + 1) return;
    currentStep === steps.length
      ? setComplete(true)
      : setCurrentStep((prev) => prev + 1);
  };

  const Stepper = () => {
    return (
      <>
        <div className="flex justify-between">
          {steps?.map((step, i) => (
            <div
              key={i}
              className={`step-item  ${currentStep === i + 1 && "active"} ${
                (i + 1 < currentStep || complete) && "complete"
              }`}
            >
              <div className="step">
                {i + 1 < currentStep || complete ? <CheckIcon /> : i + 1}
              </div>
              <p className="text-gray-500">{step}</p>
            </div>
          ))}
        </div>
      </>
    );
  };

  return {
    Stepper,
    returnStep,
    nextStep,
    currentStep,
  };
};
