import {ArrowRight} from "lucide-react"

const CallToAction = () => {
  return (
    <div className="mt-14">
      <h1 className="text-3xl font-bold text-gray-800">Learn anything, anytime, anywhere</h1>
      <p className="text-gray-400 mt-4">Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.</p>
      <div className="flex gap-4 items-center justify-center pt-4 ">
        <button className="bg-blue-500 text-white font-semibold rounded px-6 py-3">Get Started</button>
        <button className="flex">Learn More <ArrowRight/></button>
      </div>
    </div>
  )
}

export default CallToAction
