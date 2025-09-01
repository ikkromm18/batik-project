export default function CardAbout({ title, body }) {
  return (
    <div
      className="max-w-sm bg-[#4C2514] p-4 text-[#FCAD34] rounded-sm shadow-black/30"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <h5 className="text-2xl font-extrabold tracking-tight md:text-3xl">
        {title}
      </h5>

      <hr className="relative z-0 w-full mt-4 border-dashed custom-dash" />

      <p className="text-xs font-semibold mt-60 md:text-sm">{body}</p>
    </div>
  );
}
