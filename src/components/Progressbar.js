"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const Progressbar = () => {
  return (
    <div>
      <ProgressBar
        height="4px"
        color="#fffd00"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </div>
  );
};

export default Progressbar;
