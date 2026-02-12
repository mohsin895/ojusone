"use client";

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import whiteButtonImage from "../public/white button.png"
export default function InvestmentCalculator() {
  const [calculatorType, setCalculatorType] = useState('sip');
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [lumpsumAmount, setLumpsumAmount] = useState(25000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [timePeriod, setTimePeriod] = useState(5);


    useEffect(() => {
        const hash = window.location.hash.replace("#", "");

        if (hash === "sip") {
            setCalculatorType("sip");
        } else if (hash === "lumpsum") {
            setCalculatorType("lumpsum");
        }

        if (hash) {
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, []);


    // Max values
  const SIP_MAX = 1000000; // 1,00,00,000
  const LUMPSUM_MAX = 1000000; // 10,00,00,000

  const calculateSIP = () => {
    const P = monthlyInvestment || 0;
    const r = (expectedReturn || 0) / 100;
    const n = (timePeriod || 0) * 12;
    const i = r / 12;

    // Handle edge cases
    if (n === 0 || P === 0) {
      return {
        investedAmount: 0,
        estimatedReturns: 0,
        totalValue: 0
      };
    }

    // FV = P × [((1 + i)^n - 1) / i] × (1 + i)
    const FV = P * (((Math.pow(1 + i, n) - 1) / i) * (1 + i));
    const investedAmount = P * n;
    const estimatedReturns = FV - investedAmount;

    return {
      investedAmount,
      estimatedReturns,
      totalValue: FV
    };
  };

  const calculateLumpsum = () => {
    const P = lumpsumAmount || 0;
    const r = (expectedReturn || 0) / 100;
    const n = timePeriod || 0;

    // Handle edge cases
    if (n === 0 || P === 0) {
      return {
        investedAmount: P,
        estimatedReturns: 0,
        totalValue: P
      };
    }

    // FV = P × (1 + r)^n
    const FV = P * Math.pow(1 + r, n);
    const investedAmount = P;
    const estimatedReturns = FV - investedAmount;

    return {
      investedAmount,
      estimatedReturns,
      totalValue: FV
    };
  };

  const results = calculatorType === 'sip' ? calculateSIP() : calculateLumpsum();

  // Safely calculate returns percentage with NaN handling and decimal point
  const returnsPercentage = results.investedAmount > 0
    ? ((results.estimatedReturns / results.investedAmount) * 100).toFixed(1)
    : '0.0';

  const formatCurrency = (amount) => {
    // Handle NaN, Infinity, and invalid numbers
    if (!isFinite(amount) || isNaN(amount)) {
      return '0';
    }
    return new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 0
    }).format(Math.round(amount));
  };

  const handleInputChange = (value, setter, min, max) => {
    if (value === '' || value === null || value === undefined) {
      setter(0);
      return;
    }

    const numValue = Number(value);
    if (!isNaN(numValue) && numValue >= min && numValue <= max) {
      setter(numValue);
    }
  };

  const handleExpectedReturnInput = (value) => {
    // Allow empty string for clearing
    if (value === '') {
      setExpectedReturn('');
      return;
    }

    // Remove invalid characters except numbers and dot
    let cleanValue = value.replace(/[^0-9.]/g, "");

    // Allow only one dot
    const parts = cleanValue.split(".");
    if (parts.length > 2) {
      cleanValue = parts[0] + "." + parts.slice(1).join('');
    }

    // Limit decimal part to 2 digits
    if (parts.length === 2 && parts[1].length > 2) {
      cleanValue = parts[0] + "." + parts[1].slice(0, 2);
    }

    // Check if value exceeds max
    const numValue = parseFloat(cleanValue);
    if (!isNaN(numValue) && numValue > 40) {
      return; // Don't update if exceeds 40
    }

    // Allow partial input like "12.", "12.5", etc.
    setExpectedReturn(cleanValue);
  };

  // Display: show the raw value for string inputs, format for numbers
  const displayValue = typeof expectedReturn === 'string' 
    ? expectedReturn 
    : (expectedReturn === 0 ? '0' : expectedReturn.toString());
  const handleTextInput = (value, setter, max) => {
    // Remove commas and parse
    const cleanValue = value.replace(/,/g, '');

    if (cleanValue === '' || cleanValue === null) {
      setter(0);
      return;
    }

    const num = Number(cleanValue);
    if (!isNaN(num) && num >= 0 && num <= max) {
      setter(num);
    }
  };

  return (
    <section className=" bg-black font-poppins text-white mb-[100px] md:mb-[140px] overflow-hidden ">
    <div className="w-[90%] max-w-7xl font-poppins mx-auto ">
        {/* Header */}
        <div className="mb-6 md:mb-8 text-center">
  <h1
    className=" text-xl md:text-[50px] font-semibold"
    style={{

      color: "#FFFFFF",
      lineHeight: "1.2",
    }}
  >
    Investment Calculator
  </h1>
</div>


        {/* Main Content */}
        <div className="bg-dark backdrop-blur-xl font-opensans rounded-xl shadow-xl border border-slate-700/50 p-4 sm:p-6 lg:p-8">
          {/* Toggle Buttons */}
          <div className="flex justify-left mb-6 md:mb-8">
            <div className="inline-flex gap-4 sm:gap-2 pb-1">
            <button id="sip"
  onClick={() => setCalculatorType('sip')}
  style={{

    fontSize: "16px",
    fontWeight: "400",
    color: calculatorType === 'sip' ? "#957AE4" : "#FFFFFF"
  }}
  className="px-4 sm:px-6 font-opensans py-2 sm:py-3 transition-all duration-300 relative"
>
  SIP
  {calculatorType === 'sip' && (
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#957AE4]"></span>
  )}
</button>

<button
  onClick={() => setCalculatorType('lumpsum')}
  style={{

    fontSize: "16px",
    fontWeight: "400",
    color: calculatorType === 'lumpsum' ? "#957AE4" : "#FFFFFF"
  }}
  id="lumpsum"
  className="px-4 sm:px-6 py-2 sm:py-3 font-opensans transition-all duration-300 relative"
>
  Lumpsum
  {calculatorType === 'lumpsum' && (
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#957AE4]"></span>
  )}
</button>

            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Section - Controls */}
            <div className="space-y-4 lg:space-y-8">
              {/* Investment Input */}
              {calculatorType === 'sip' ? (
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-row justify-between items-center gap-2 sm:gap-4">
                  <label
                  style={{
                    fontFamily: "Open Sans",

                    fontWeight: "400",
                    color: "#FFFFFF"
                  }}

                  className=" text-sm md:text-[16px]"
                >
                  Monthly Investment (₹)
                </label>
                    <div className="bg-dark w-[120px]  md:w-[160px] px-3 sm:px-4 py-2 rounded-lg border border-slate-700/50">
                      <div className="flex items-center justify-end gap-2">
                        <span className="text-[#957AE4] hidden sm:block font-semibold text-sm sm:text-base">₹</span>
                        <input
                          type="text"
                          value={monthlyInvestment.toLocaleString('en-IN')}
                          onChange={(e) => handleTextInput(e.target.value, setMonthlyInvestment, SIP_MAX)}
                          className="w-full text-[#957AE4] font-bold font-opensans bg-dark text-right outline-none text-sm sm:text-base"
                        />
                      </div>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={SIP_MAX}
                    step="100"
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                    className="w-[90%] md:w-full h-2 bg-slate-700 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #957AE4 0%, #957AE4 ${(monthlyInvestment / SIP_MAX) * 100}%, rgb(51, 65, 85) ${(monthlyInvestment / SIP_MAX) * 100}%, rgb(51, 65, 85) 100%)`
                    }}
                  />
                </div>
              ) : (
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-row justify-between sm:items-center gap-2 sm:gap-4">
                  <label
                  style={{
                    fontFamily: "Open Sans",

                    fontWeight: "400",
                    color: "#FFFFFF"
                  }}
                  className=" text-sm md:text-[16px]"
                >
                  Total Investment (₹)
                </label>
                    <div className="bg-dark w-[120px]  md:w-[160px] px-3 sm:px-4 py-2 rounded-lg border border-slate-700/50">
                      <div className="flex items-center justify-end gap-2">
                        <span className="text-[#957AE4] hidden sm:block font-semibold text-sm sm:text-base">₹</span>
                        <input
                          type="text"
                          value={lumpsumAmount.toLocaleString('en-IN')}
                          onChange={(e) => handleTextInput(e.target.value, setLumpsumAmount, LUMPSUM_MAX)}
                          className="w-full text-[#957AE4] font-bold bg-transparent text-right outline-none text-sm sm:text-base"
                        />
                      </div>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={LUMPSUM_MAX}
                    step="1000"
                    value={lumpsumAmount}
                    onChange={(e) => setLumpsumAmount(Number(e.target.value))}
                    className="w-[90%] md:w-full h-2 bg-slate-700 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #957AE4 0%, #957AE4 ${(lumpsumAmount / LUMPSUM_MAX) * 100}%, rgb(51, 65, 85) ${(lumpsumAmount / LUMPSUM_MAX) * 100}%, rgb(51, 65, 85) 100%)`
                    }}
                  />
                </div>
              )}

              {/* Expected Returns Rate */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-row justify-between sm:items-center gap-2 sm:gap-4">
                <label
          style={{


            fontWeight: "400",
            color: "#FFFFFF"
          }}
          className=" text-sm md:text-[16px]"
        >
          Expected Return Rate (%)
        </label>
                  <div className="bg-dark w-[120px]  md:w-[160px] px-3 sm:px-4 py-2 rounded-lg border border-slate-700/50">
                    <div className="flex items-center justify-end gap-2">
                    <input
              type="number"
              min="0"
              max="40"
              step="0.01"
              value={displayValue}
              onChange={(e) => handleExpectedReturnInput(e.target.value)}
              className="w-full text-[#957AE4] font-bold bg-transparent text-right outline-none text-sm sm:text-base [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
                      <span className="text-[#957AE4] hidden sm:block font-semibold text-sm sm:text-base">%</span>
                    </div>
                  </div>
                </div>
                <input
        type="range"
        min="0"
        max="40"
        step="0.01"
        value={expectedReturn}
        onChange={(e) => setExpectedReturn(Number(e.target.value))}
        className="w-[90%] md:w-full h-2 bg-slate-700 rounded-full appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, #957AE4 0%, #957AE4 ${
            (expectedReturn / 40) * 100
          }%, rgb(51, 65, 85) ${(expectedReturn / 40) * 100}%, rgb(51, 65, 85) 100%)`,
        }}
      />
              </div>

              {/* Time Period */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-row justify-between items-center gap-2 sm:gap-4">
                <label
                  style={{


                    fontWeight: "400",
                    color: "#FFFFFF"
                  }}
                  className=" text-sm md:text-[16px]"
                >
                  Time Period (in Years)
                </label>
                  <div className="bg-dark w-[120px] md:w-[160px] px-3 sm:px-4 py-2 rounded-lg border border-slate-700/50">
                    <div className="flex items-center justify-end gap-2">
                      <input
                        type="number"
                        min="0"
                        max="40"
                        value={timePeriod}
                        onChange={(e) => {
                            const value = e.target.value;
                            const intValue = parseInt(value, 10); // removes decimal completely

                            if (!isNaN(intValue) && intValue >= 0 && intValue <= 40) {
                                setTimePeriod(intValue);
                            }
                        }}

                        className="w-full text-[#957AE4] font-bold bg-transparent text-right outline-none text-sm sm:text-base [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      />
                    </div>
                  </div>
                </div>
                <input
              type="range"
              min="0"
              max="40"
              step="1"
              value={timePeriod}
              onChange={(e) => setTimePeriod(Number(e.target.value))}
              className="w-[90%] md:w-full h-2 bg-slate-700 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #957AE4 0%, #957AE4 ${(timePeriod / 40) * 100}%, rgb(51, 65, 85) ${(timePeriod / 40) * 100}%, rgb(51, 65, 85) 100%)`
              }}
            />

              </div>

              {/* CTA Button - Desktop */}
              {/*<div className=" flex justify-center pt-4">*/}
              {/*<a href="https://login.ojusone.com/NewOnBoarding/SignUp"*/}
              {/*    type="button"*/}
              {/*    className={`*/}
              {/*      btn btn-lg p-0 font-poppins border-0 bg-transparent cursor-pointer*/}
              {/*      ${calculatorType === "sip" ? "ml-[-6px] w-[200px]" : "ml-[8px]"}*/}
              {/*    `}*/}
              {/*    data-toggle="modal"*/}
              {/*    data-target="#exampleModalCenter"*/}
              {/*  >*/}
              {/*    <span className="relative d-flex justify-content-center align-items-center">*/}
              {/*      <Image*/}
              {/*        src={whiteButtonImage}*/}
              {/*        alt="Get Started Button"*/}
              {/*        className="h-[55px] w-auto object-contain"*/}
              {/*        width={55}*/}
              {/*        height={55}*/}
              {/*      />*/}

              {/*      <h1*/}
              {/*        className={` absolute top-3 -left-20 z-50 font-opensans elementor-button-text text-black text-[18px] font-medium ${calculatorType === "sip" ? "ml-[93px]" : "ml-[106px]"} `}*/}
              {/*      >*/}
              {/*        {calculatorType === "sip" ? "Start your SIP now" : "Start Investing"}*/}
              {/*      </h1>*/}
              {/*    </span>*/}
              {/*  </a>*/}


              {/*    </div>*/}

                <div className=" flex justify-center pt-4">
                    <a href="https://login.ojusone.com/NewOnBoarding/SignUp"
                       type="button"
                       className={`
                    btn btn-lg p-0 font-poppins border-0 bg-transparent cursor-pointer
                    ${calculatorType === "sip" ? "ml-[-6px] w-[200px]" : "ml-[8px]"}
                  `}
                       data-toggle="modal"
                       data-target="#exampleModalCenter"
                    >
                 <span className="relative flex items-center justify-center">
  <Image
      src={whiteButtonImage}
      alt="Get Started Button"
      className="h-[55px] w-auto object-contain"
      width={200}
      height={55}
  />

  <span className="absolute inset-0 flex items-center justify-center z-50">
    <span className="font-opensans text-black text-[16px] sm:text-[18px] font-medium text-center px-2">
      {calculatorType === "sip" ? "Start your SIP now" : "Start Investing"}
    </span>
  </span>
</span>

                    </a>


                </div>



              {/* <div className="hidden lg:flex justify-center pt-4">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-orange-500/50">
                  {calculatorType === 'sip' ? 'Start your SIP now' : 'Start Investing'}
                </button>
              </div> */}
            </div>

            {/* Right Section - Results */}
            <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 lg:space-y-10">
              {/* Investment Details + Donut Chart */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-10 md:gap-12 w-full">

                <div className="space-y-6 w-full md:w-[50%] p-0">
                  <div>
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                          <div className="w-3 h-3 bg-slate-600  rounded-full"></div>
                          <span
                               className="text-[16px] justify-center md:justify-start"
                            style={{


                              color: "#fff",

                            }}
                          >
                            Invested Amount
                          </span>
                        </div>
                      <div className="flex text-xl font-bold text-[#957AE4] justify-center md:justify-start md:pl-[30px]">
                          ₹{formatCurrency(results.investedAmount)}
                      </div>

                  </div>

                  <div>
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <div className="w-3 h-3 bg-[#957AE4] rounded-full"></div>
                  <p
                    style={{

                      fontSize: "16px", // label font size

                      color: "#fff",

                    }}
                  >
                    Estimated Returns
                  </p>
                </div>
                      <div className="flex text-xl font-bold text-[#957AE4] justify-center md:justify-start md:pl-[30px]">
                          ₹{formatCurrency(results.estimatedReturns)}
                      </div>

                  </div>
                </div>

                <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-72 md:h-72 flex-shrink-0 md:order-2">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="38"
                        fill="none"
                        stroke="rgb(51,65,85)" // background circle
                        strokeWidth="13"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="38"
                        fill="none"
                        stroke="#957AE4" // updated color
                        strokeWidth="13"
                        strokeDasharray={`${results.totalValue > 0 ? (results.estimatedReturns / results.totalValue) * 239 : 0} 239`}
                        strokeLinecap="round"
                      />
                    </svg>

                  <div className="absolute inset-0  flex flex-col items-center justify-center">
                  <div
                      style={{


                        fontWeight: "600", // or 400 for regular
                        color: "#957AE4"
                      }}
                    className="text-md md:text-[26px]">
                      {returnsPercentage}%
                    </div>

                    <div
                  style={{

                    fontSize: "18px",
                    fontWeight: "400",
                    color: "#D9D9D9",
                    marginTop: "0.5rem"
                  }}
                >
                  Return


                </div>

                  </div>
                </div>
              </div>

              {/* Total Value */}
              <div className="text-center w-full">
              <div
                    className="mb-3 text:[12px] md:text-[24px] "
                    style={{

                      // for the label text
                      fontWeight: "400",
                      color: "#FFFFFF",
                    }}
                  >
                    Total of your investment will be
                  </div>
                <div className=" text-[24px] md:text-[48px] font-bold bg-[#957AE4] bg-clip-text text-transparent">
                  ₹{formatCurrency(results.totalValue)}
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          transition: all 0.3s ease;
        }

        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 3px 12px rgba(249,115,22,0.5);
        }

        input[type="range"]::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          transition: all 0.3s ease;
        }

        input[type="range"]::-moz-range-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 3px 12px rgba(249,115,22,0.5);
        }

        @media (min-width: 640px) {
          input[type="range"]::-webkit-slider-thumb {
            width: 20px;
            height: 20px;
          }
          input[type="range"]::-moz-range-thumb {
            width: 20px;
            height: 20px;
          }
        }
      `}</style>
    </section>
  );
}