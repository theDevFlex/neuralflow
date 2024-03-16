import Image from "next/image";
import { Nodes, Node } from "../asset/svgs";
import { TensorFlow } from "../icons";

export function Features() {
  return (
    <>
      {/* 1 */}
      <div className="flex w-full flex-col md:items-center">
        <h2 className="pb-10 text-4xl font-bold">Features</h2>
        <div className="flex w-full flex-col gap-5">
          <h3 className="text-2xl font-bold">Intuitive Model Building</h3>
          <Nodes className="hidden w-full md:flex" />
          <Node className=" md:hidden" />
        </div>
        <p className="text-muted-foreground">
          Korem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur,
          magna nec mollis fermentum, libero arcu consequat nisi, non blandit
          ante dolor non leo. Praesent scelerisque urna sed risus vehicula, at
          maximus mi tincidunt.
        </p>
      </div>

      <div className="flex w-full flex-col items-center justify-center ">
        {/* 2 */}
        <div className="flex w-full flex-col justify-start py-5">
          <h3 className="w-full text-2xl font-bold">
            Seamless Loading to any environment
          </h3>
        </div>
        <div className="flex w-full flex-col gap-10 md:gap-2">
          <div className="flex flex-col items-start justify-center gap-3 md:flex-row md:items-center md:gap-10">
            <Image
              src="/image/code1.png"
              alt="Code Example"
              width={1920}
              height={1080}
              className="w-full md:w-3/5"
            />
            <div className="flex grow flex-col gap-2 md:pb-32">
              <h3 className="text-lg font-bold">Get generated code</h3>
              <p>
                Copy paste the model directly to your desired python environment
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 md:flex-row-reverse md:items-center md:gap-10 xl:-mt-16">
            <Image
              src="/image/code2.png"
              alt="Code Example"
              width={1920}
              height={1080}
              className="w-full md:w-[55%]"
            />
            <div className="flex grow flex-col gap-2  md:items-end">
              <h3 className="text-lg font-bold md:text-right">
                Directly import your model
              </h3>
              <p className="md:text-right">
                No need to download everytime you edit, Import model from our
                package
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="items:start flex flex-col gap-10 md:flex-row md:items-center ">
            <TensorFlow />
            <div className="flex grow flex-col gap-2">
              <h3 className="text-lg font-bold">Download model</h3>
              <p className="">
                You can also download model in tensorflow supported formats.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
