import { motion } from "motion/react"
import { useState } from "react"
import { GoogleSVG } from "./components/google-svg";
import { AppleSVG } from "./components/apple-svg";
import { Credits } from "./components/credits";

function App() {
  const [state, setState] = useState<'opened' | 'closed'>('closed');

  return (
    <section className="w-full h-dvh flex justify-center items-center">
      <Credits />
      {state == 'closed' && (
        <motion.button 
          key="button"
          layoutId="wrapper"
          onClick={() => setState('opened')}
          className="h-12 w-48 flex justify-center relative items-center gap-1 bg-gray-200 overflow-hidden"
          style={{ borderRadius: 24 }}
        >
          <motion.span 
            layoutId="button-text"
          >
            Sign In
          </motion.span>
          <motion.svg
            layout="position" 
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </motion.svg>
        </motion.button>
      )}
      {state == 'opened' && (
        <motion.div
          key="wrapper"
          layoutId="wrapper" 
          className="w-80 px-3 py-1 overflow-hidden flex flex-col gap-1"
          style={{ borderRadius: 12, boxShadow: '0px 0px 2px rgba(0, 0, 0, .2)' }}
        >
          <div className="flex items-center justify-between">
            <motion.span
              layoutId="button-text"
            >
              <span className="text-sm text-gray-500">
                Sign In
              </span>
            </motion.span>
            <svg
              width="20"
              height="20"
              onClick={() => setState('closed')}
              className="stroke-gray-300"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M18 6 6 18M6 6l12 12"></path>
            </svg>
          </div>
          <div className="w-80 relative -left-3 h-px bg-gray-100" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: .2 } }} 
            transition={{ duration: .1 }}
            className="my-2 flex flex-col gap-2 text-sm"
          >
            <button
              className="w-full h-10 rounded-lg flex justify-center gap-2 items-center bg-gray-100"
            >
              <GoogleSVG />
              Continue with Google
            </button>
            <button
              className="w-full h-10 rounded-lg flex justify-center gap-2 items-center bg-gray-100"
            >
              <AppleSVG />
              Continue with Apple
            </button>
            <div className="flex items-center gap-5">
              <div className="w-full h-px bg-gray-100 rounded-full" />
              <span className="text-gray-400">Or</span>
              <div className="w-full h-px bg-gray-100 rounded-full" />
            </div>
            <input
              type="text"
              placeholder="Email" 
              className="bg-transparent w-full h-11 px-3 rounded-lg"
              style={{ boxShadow: '0px 0px 2px rgba(0, 0, 0, .2)' }}
            />
            <button 
              className="w-full h-10 rounded-lg flex justify-center items-center gap-1 bg-black text-white"
            >
              <span>
                Continue
              </span>
              <svg
                width="14"
                height="14"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default App
