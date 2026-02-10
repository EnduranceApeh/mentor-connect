function FeatureCard({icon, title, description}) {
  return(
    <div className="flex flex-col gap-2 p-6 border rounded-xl border-none shadow-sm">
      <img src={icon} alt="" className="mx-auto w-[40px]"/>
      <h3 className="font-bold text-[#1E293B]">{title}</h3>
      <p className="text-[#4B5563] text-sm">{description}</p>
    </div>
  )
}

export default FeatureCard