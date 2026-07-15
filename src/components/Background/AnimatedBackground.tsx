export default function AnimatedBackground() {
  return (
    <>
      <div className="fixed inset-0 -z-20 bg-[#050816]" />

      <div className="fixed -top-40 left-0 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="fixed bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-violet-600/20 blur-[140px]" />
    </>
  );
}
