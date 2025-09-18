"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const RegisterModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 ">
          <motion.div
            initial={{ y: -50, opacity: 0 }}   
            animate={{ y: 0, opacity: 1 }}           
            exit={{ y: -100, opacity: 0 }}          
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-5xl  flex overflow-hidden"
          >
           
            <div className="bg-blue-900 text-white p-10 w-1/2">
              <h2 className="text-2xl font-semibold mb-4 leading-snug">
                Your one-stop digital marketplace <br /> for all your industrial needs
              </h2>
              <img
                src="./jsw_one_msme.svg"
                alt="JSW One MSME"
                className="mt-auto w-28 text-white"
                
              />
            </div>

            <div className="p-10 w-1/2 relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 text-xl hover:text-black"
              >
                X
              </button>
              <h2 className="text-xl font-bold mb-6">Register Now</h2>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full name *"
                  className="w-full p-3 border rounded-md"
                />
                <input
                  type="text"
                  placeholder="Phone number *"
                  className="w-full p-3 border rounded-md"
                />
                <input
                  type="text"
                  placeholder="GSTIN"
                  className="w-full p-3 border rounded-md"
                />
                <input
                  type="email"
                  placeholder="Company email address *"
                  className="w-full p-3 border rounded-md"
                />

                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <p className="text-xs text-gray-600">
                    I agree to JSW One MSME’s{" "}
                    <a href="#" className="text-blue-600 underline">
                      Terms and conditions
                    </a>
                    ,{" "}
                    <a href="#" className="text-blue-600 underline">
                      Return policy
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-600 underline">
                      Privacy policy
                    </a>
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-300 py-3 rounded-md hover:bg-gray-400"
                >
                  Next
                </button>
              </form>

              <p className="mt-6 text-sm text-center">
                Already have an account?{" "}
                <a href="#" className="text-blue-600 font-medium">
                  Login
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default RegisterModal;
