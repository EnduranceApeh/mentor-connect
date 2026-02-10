function StepCard({number, title, description}) {
  return(
    <div className="flex flex-col gap-4 w-[250px] mx-auto">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#3B82F6] text-white font-semibold mx-auto">
        {number}
      </div>
      <h3 className="font-bold text-[#1E293B]">{title}</h3>
      <p className="text-[#4B5563] text-sm">{description}</p>
    </div>
  )
}

export default StepCard