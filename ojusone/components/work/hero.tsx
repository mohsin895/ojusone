"use client";

export default function WorkHero() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-2 w-full">
      <div className="flex flex-col items-center text-center space-y-6">
        
        {/* Full-width heading container */}
        <div className="max-w-7xl">
          <h1
            className="
              max-w-7xl
              font-bold 
              bg-clip-text 
              bg-gradient-to-r 
              from-purple-400 
              to-blue-400 
              text-balance 
              leading-tight
              text-2xl 
              sm:text-3xl 
              md:text-4xl 
              lg:text-5xl 
              xl:text-6xl
            "
          >
            Planning.
            <span className="pl-0 md:pl-1 lg:pl-0 xl:pl-[50px] text-[#727272]">
              Excusion.
            </span>
            <span className="pl-0 md:pl-1 lg:pl-0 xl:pl-[50px] text-transparent">
              Success
            </span>
          </h1>
        </div>

     
      </div>
    </section>
  );
}
