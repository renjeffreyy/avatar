import React from "react";
import { AnimationGroup } from "../components/animation-group.component";

export const AnimationLayout = ({ children }) => {
  return (
    <div className="bg-red-900 w-screen h-screen">
      <AnimationGroup flyingWordsText="FrontEnd">
      </AnimationGroup>
      <AnimationGroup flyingWordsText="BackEnd">
      </AnimationGroup>
      <AnimationGroup flyingWordsText="Databases">
      </AnimationGroup>
      <AnimationGroup flyingWordsText="Algorithms">
      </AnimationGroup>
    </div>
  );
};
