import { DashedLine } from "../../asset/svgs";

export function Integration() {
  return (
    <div className="flex max-w-[50rem] flex-col items-start justify-start gap-10 px-5 lg:max-w-[100rem] lg:flex-row lg:items-center lg:px-32">
      <div className="flex flex-col gap-2 lg:w-1/3">
        <h3 className="text-xl font-bold md:text-3xl">Git/Github</h3>
        <p className="max-w-7xl">
          Connect your GitHub account to synchronize your model development
          process, enabling version control and collaborative review
        </p>
      </div>
      <DashedLine className="hidden lg:flex" />

      <div className="flex flex-col gap-2 lg:w-1/3">
        <h3 className="text-xl font-bold md:text-3xl">Model Marketplace</h3>
        <p className="max-w-7xl">
          Use templates and AI suggestions to speed up your model development
        </p>
      </div>
      <DashedLine className="hidden lg:flex" />

      <div className="flex flex-col gap-2 lg:w-1/3">
        <h3 className="text-xl font-bold md:text-3xl">API Accessibility</h3>
        <p className="max-w-7xl">
          Integrate models directly into your applications with generated API
          keys for a seamless deployment pipeline
        </p>
      </div>
    </div>
  );
}
