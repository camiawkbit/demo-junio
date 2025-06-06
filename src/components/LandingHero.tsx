export function LandingHero(props: any) {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-700 dark:to-blue-800 text-center py-20 px-4">
      <h1 className="text-5xl md:text-7xl font-bold dark:text-white text-gray-100 mb-4">
        {props.t1}
      </h1>
      <p className="text-lg md:text-xl dark:text-gray-200 text-gray-300">
        {props.t2}
      </p>
      <button className="mt-8 px-6 py-3 bg-white hover:bg-gray-100 text-blue-600 rounded-lg">
        {props.t3}
      </button>
    </div>
  );
}
