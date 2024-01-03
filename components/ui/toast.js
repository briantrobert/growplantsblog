function Toast({error, message, onOpen, closeToast}) {
    return (
      <div className={`${onOpen ? 'fixed':'hidden'} z-40 top-8 right-8 max-w-lg px-4 py-3 ${error ? 'border-red-200 text-red-500 bg-red-200 shadow-red-400/10':'border-green-200 text-green-500 bg-green-200 shadow-green-400/10'} shadow-lg rounded-md`}>
        <div className="flex items-center gap-2">
          <svg className="h-6 w-6" viewBox="0 0 24 24">
            <path
              stroke="#292D32"
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M22 11.1V6.9C22 3.4 20.6 2 17.1 2h-4.2C9.4 2 8 3.4 8 6.9V8h3.1c3.5 0 4.9 1.4 4.9 4.9V16h1.1c3.5 0 4.9-1.4 4.9-4.9z"
            ></path>
            <path
              stroke="#292D32"
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M16 17.1v-4.2C16 9.4 14.6 8 11.1 8H6.9C3.4 8 2 9.4 2 12.9v4.2C2 20.6 3.4 22 6.9 22h4.2c3.5 0 4.9-1.4 4.9-4.9z"
            ></path>
            <path
              stroke="#292D32"
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M6.08 15l1.95 1.95 3.89-3.9"
            ></path>
          </svg>
          <p className={`font-medium ${error ? 'text-red-700' : 'text-green-700'}`}>
            {message}
          </p>
          <div className="ml-3">
            <button className={`${error ? 'border-red-200 p-1 text-red-700 hover:bg-red-300' :'border-green-200 p-1 text-green-700 hover:bg-green-300'} rounded-lg `} onClick={() => closeToast(false)}>
              <span className="sr-only">Close</span>
              <svg className="h-6 w-6" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M5.293 5.293a1 1 0 011.414 0L12 10.586l5.293-5.293a1 1 0 111.414 1.414L13.414 12l5.293 5.293a1 1 0 01-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 01-1.414-1.414L10.586 12 5.293 6.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Toast
  