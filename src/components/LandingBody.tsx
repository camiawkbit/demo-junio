export function LandingBody(props: any) {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <h2 className="text-3xl md:text-5xl font-semibold text-center dark:text-gray-100 text-gray-800 mb-12">
        {props.t1}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl text-center max-w-2xl mx-auto">
        {props.t2}
      </p>
    </section>
  );
}
