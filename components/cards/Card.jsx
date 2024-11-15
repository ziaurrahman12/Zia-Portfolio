import Image from "next/image"

const Card = ({type, logoUrl, position, duration, description, company, institution,qualification, name, icon }) => {
  return (
    <div className='w-full h-[300px] overflow-hidden flex items-center sticky top-12'>
      <div className="w-full h-[270px] border border-accent/80 bg-[#f4ffff] rounded-[8px]">
      <div className="flex flex-col h-full">
        <div className='h-[80px] xl:h[68px] bg-white flex flex-col xl:flex-row justify-center xl:justify-between items-center px-6 md:px-[84px] rounded-tl-[8px] rounded--tr-[8px]'>
          <div className='flex gap-2'>
            <img src='/assets/journey/shape.svg' width={16} height={16} alt=""/>
            <h3 className="text-lg font-semibold text-primary">
              {type === "experience" 
              ? position 
              : type === "education" 
              ? qualification 
              : duration}
            </h3>
          </div>
            <p className="text-base">
              {type !== "experience" && type !== "education" ? null : duration}
            </p>
        </div>
        <div className="flex-1 flex items-center justify-center xl:justify-start md:py-8 md:px-16">
            <div className="flex flex-col xl:flex-row items-center xl:items-start gap-4 text-center xl:text-left xl:gap-10 px-4 xl:px-0">
              {type === "skill" ? (
                // Render Icon for Skills
                <div className="w-max xl:w-[300px] h-full relative flex items-center justify-center">
                  <div className="text-5xl text-primary/90">{icon}</div>
                </div>
                // Render the Logo for Experience and Education
              ) : (
                <div className="relative w-[300px] h-[38px] xl:h-[44px]">
                  <img src={logoUrl} fill alt="" className="object-contain"/>
                </div>
              )}

              <div className="xl:border-l xl:border-secondary/10 xl:pl-12 w-full">
                <h3 className="hidden xl:flex h3 mb-2 xl:mb-4">
                  {type === "experience" 
                  ? company 
                  : type === "education"
                  ? institution 
                  : type === "skill" 
                  ? name 
                  : null}
                </h3>
                <p className="text-base max-w-[660px]">{description}</p>
              </div>
            </div>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Card