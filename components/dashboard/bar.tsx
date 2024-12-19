import Image from "next/image";

export default function ProgressBar() {
  const steps = [
    { id: 1, title: 'Preliminary' },
    { id: 2, title: 'Your Details' },
    { id: 3, title: 'KYC' },
    { id: 4, title: 'Parties' },
    { id: 5, title: 'Claim' },
    { id: 6, title: 'Review' },
    { id: 7, title: 'Payment' },
  ];

  const currentStep = 3;

  return (
    <div className="flex flex-col items-center justify-center mb-4 md:mx-32">
      <div className="relative flex items-center gap-x-32 w-full">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`hidden xl:flex flex-col items-center justify-center ${
              index <= currentStep
                ? 'text-blue-500'
                : 'text-gray-400'
            }`}
          >
            <div
              className={`relative w-12 h-12 rounded-full flex items-center justify-center text-black z-10 ${
                index === currentStep
                  ? 'border-2 border-blue-500 bg-neutral-100'
                  : index < currentStep
                    ? 'bg-blue-500 hidden xl:flex'
                    : 'border-2 border-gray-400 bg-neutral-100 hidden xl:flex'
              }`}
            >
              <div className="absolute top-0 -translate-y-full text-xs font-medium hidden xl:flex flex-row gap-x-2 whitespace-nowrap pb-2">
                <h1 className="text-2xl font-extrabold">0{step.id}</h1> <p className="text-neutral-500 font-bold text-base mt-1">{step.title}</p>
              </div>
              {index < currentStep && (
                <Image className="invert" src="/tick.svg" width={20} height={20} alt="tick" />
              )}
            </div>
          </div>
        ))}

          <div className="xl:hidden sm:items-center flex flex-row gap-x-1">
            <div className="relative ml-8 xl:ml-0 h-16 w-16 rounded-full flex items-center justify-center border-8 border-blue-500 bg-transparent">
            </div>
            <div className="absolute top-16 left-28 -translate-y-full text-xs font-medium xl:hidden flex flex-row gap-x-2 whitespace-nowrap pb-2 ">
              <h1 className="text-5xl font-extrabold">0{currentStep + 1}</h1> <p className="text-neutral-500 font-bold text-2xl mt-3">Parties</p>
            </div>
          </div>  
        </div>
        <div className=" absolute top-[115px] left-[450px] xl:flex hidden items-center justify-between w-[1050px] mt-4">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`flex-1 h-1 ${
              index < currentStep
                ? 'bg-blue-500'
                : 'bg-gray-400'
            } ${
              index === currentStep - 1 && index !== steps.length - 1
                ? 'border-b-2 border-dashed border-blue-500'
                : ''
            }`}
          />
        ))}
      </div>
      
    </div>
  );
};
