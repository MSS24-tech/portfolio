export default function AnimatedBackground() {
  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 -z-20 bg-[#050816]" />

      {/* Cyan Glow */}
      <div
        className="
          fixed
          -top-24
          -left-24
          -z-10
          h-72
          w-72
          rounded-full
          bg-cyan-500/15
          blur-3xl
          will-change-transform
          md:h-[420px]
          md:w-[420px]
        "
      />

      {/* Violet Glow */}
      <div
        className="
          fixed
          -bottom-24
          -right-24
          -z-10
          h-72
          w-72
          rounded-full
          bg-violet-600/15
          blur-3xl
          will-change-transform
          md:h-[420px]
          md:w-[420px]
        "
      />
    </>
  );
}
