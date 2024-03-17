import Image from "next/image";
import { Nodes, Node } from "../../asset/svgs";
import { TensorFlow } from "../../icons";
import { Code } from "@/components/ui/code";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

let code1 = `# unet
conv1 = Conv2D(4, (3, 3), activation='relu', padding='same')(input_img)
conv1 = Conv2D(4, (3, 3), activation='relu', padding='same')(conv1)
pool1 = MaxPooling2D(pool_size=(2, 2))(conv1)

conv2 = Conv2D(8, (3, 3), activation='relu', padding='same')(pool1)
conv2 = Conv2D(8, (3, 3), activation='relu', padding='same')(conv2)
pool2 = MaxPooling2D(pool_size=(2, 2))(conv2)

conv3 = Conv2D(16, (3, 3), activation='relu', padding='same')(pool2)
conv3 = Conv2D(16, (3, 3), activation='relu', padding='same')(conv3)

# Decoding path
up1 = UpSampling2D((2, 2))(conv3)
concat1 = Concatenate()([up1, conv2]) # Ensure dimensions match for concatenation
conv4 = Conv2D(8, (3, 3), activation='relu', padding='same')(concat1)
conv4 = Conv2D(8, (3, 3), activation='relu', padding='same')(conv4)`;
let code2 = `import neuralflow as nf

NEURAL_FLOW_API_KEY="xxxxxxxxxxxxxxxxxxxx"

model = nf.getModel(
    id="xxxx-xxxx-xxxx",
    api_key=NEURAL_FLOW_API_KEY
)
`;

export function Features() {
  return (
    <div className="-mt-10 flex w-full flex-col items-center gap-10 px-5 lg:mt-0 lg:px-32">
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
          <h3 className="mb-10 w-full text-2xl font-bold">
            Seamless Loading to any environment
          </h3>
        </div>
        <div className="flex w-full flex-col items-center gap-10 md:gap-2">
          <div className=" flex  flex-col items-start justify-center gap-3 md:flex-row md:items-center md:gap-10">
            <ScrollArea className="max-w-md rounded-md sm:max-w-xl lg:max-w-4xl">
              <Code code={`\`\`\`py \n${code1}`} />
              <ScrollBar orientation="horizontal" />
              <ScrollBar orientation="vertical" />
            </ScrollArea>
            <div className="flex grow flex-col gap-2 md:pb-32">
              <h3 className="text-lg font-bold">Get generated code</h3>
              <p>
                Copy paste the model directly to your desired python environment
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 md:flex-row-reverse md:items-center md:gap-10 xl:-mt-16">
            <div
              className="md:shadow-custom z-10 rounded-lg"
              // style={{ boxShadow: "-7px -7px 300px white" }}
            >
              <Code code={`\`\`\`py \n${code2}`} />
            </div>
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
    </div>
  );
}
