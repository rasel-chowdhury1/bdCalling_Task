const ProgressBar: React.FC = () => {
    const steps = [
        { id: 1, label: 'Order received', status: 'completed' },
        { id: 2, label: 'Processing', status: 'current' },
        { id: 3, label: 'On the way', status: 'pending' },
        { id: 4, label: 'Delivered', status: 'pending' },
      ];
    return (
        <div className="relative w-5/6 mx-auto sm:w-4/5 lg:w-3/4">
        {/* Progress Line */}
        <div className="absolute top-8 left-0 w-11/12 ml-8 h-2 bg-gray-300 sm:ml-6 ">
          <div
            className="h-full bg-[#EA5326] transition-all ease-linear"
          ></div>
        </div>
  
        {/* Progress Points */}
        <div className="relative flex justify-between items-center">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center gap-2">
              <div
                className="flex items-center justify-center w-12 h-12 sm:w-10 sm:h-10 lg:w-14 lg:h-14 rounded-full font-medium text-white mt-2 bg-[#EA5326]"
              >
                {step.status === 'completed' ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 6L9 17L4 12"
                    />
                  </svg>
                ) : (
                  <span className="text-sm sm:text-xs lg:text-lg">0{step.id}</span>
                )}
              </div>
  
              <div className="font-poppins text-center text-xs sm:text-sm lg:text-base text-[#EB2926] leading-[150%]">
                {step.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}

export default ProgressBar;